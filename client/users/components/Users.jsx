/**
 * A component designed to handle all types of user related interface
 * (login, signup). Meteor Accounts-ui works in a similar fashion ;
 * the page to show is passed as a prop, so that we can easily switch
 * from one page to another, or lock a page depending on the route
 *
 * TODO :  some refactoring could reduce duplications between components,
 * as each component have a button, a form, a title, a top redirection button ("already logged in ?"),
 * a facultative bottom redirection button ("Forgotten password"), and a callback for each form
 */
import React, { Component, PropTypes} from 'react'
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import SignupForm from './SignupForm'
import  LoginForm from './LoginForm'
import AlreadyLogged from './AlreadyLogged'
import Forgotten from './Forgotten'
import ResetPassword from './ResetPassword'

// styles for the module
// each submodule can use the styles
const styles={
  titleDiv:{
    textAlign:'center'
  },
  buttonDiv:{
    paddingTop:'40px',
    paddingBottom:'20px'
  }
}
class Users extends Component {
  constructor(props){
    super(props)
    // the initial state is given as a prop
    this.state = {
      display : props.display
    }
    this.changeDisplay = this.changeDisplay.bind(this)
  }


  /**
   * Change to another page (login, signup or other)
   */
  changeDisplay(display){
    this.setState({display})
  }

  render(){
    const childrenProps = {
      userId : this.props.userId,
      changeDisplay : (()=> {return this.changeDisplay})(), // NOTE : this syntax prevent the function to be triggered
      styles:styles
    }
    let page
    // signup and login can only be shown when logged out
    const alreadyLogged =  <AlreadyLogged {...childrenProps} />
    const userId = this.props.userId
    switch(this.state.display){
      case 'signup': userId ? page = alreadyLogged : page = <SignupForm {...childrenProps} />;
      break
      case 'login': page = userId ? alreadyLogged : <LoginForm {...childrenProps} />;
      break
      case 'forgotten' : page = <Forgotten {...childrenProps}/>;
      break
      case 'already-logged' : page = alreadyLogged
      break
      case 'reset-password' : page = <ResetPassword {...childrenProps} token={this.props.token}/>
      break
      default : page = userId ? alreadyLogged : <LoginForm {...childrenProps}/> // default is login
    }
    return page
  }
}
// Meteor data container
export default createContainer(() => {
  return {
    userId: Meteor.userId()
  }
}, Users)

Users.propTypes = {
  display : (props, propName, componentName)=>{
    if (! [
      'default',
      'signup',
      'login',
      'reset-password',
      'forgotten-password',
      'already-logged'
    ].includes(props[propName])) return new Error('You must supply a page to display')
  },
  userId : PropTypes.string,
  token : PropTypes.string // a token may be passed for some verification
}
