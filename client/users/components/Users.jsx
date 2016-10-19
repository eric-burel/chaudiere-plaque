/**
 * A component designed to handle all types of user related interface
 * (login, signup). Meteor Accounts-ui works in a similar fashion ;
 * the page to show is passed as a prop, so that we can easily switch
 * from one page to another, or lock a page depending on the route
 */
import React, { Component, PropTypes} from 'react'
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import SignupForm from './SignupForm'
import  LoginForm from './LoginForm'

class Users extends Component {
  constructor(props){
    console.log("calling constructor")
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
    console.log('click click')
    console.log(display)
    this.setState({display})
  }

  render(){
    console.log('rendering...')
    console.log(this.state)
    const childrenProps = {
      userId : this.props.userId,
      changeDisplay : (()=> {return this.changeDisplay})() // NOTE : this syntax prevent the function to be triggered
    }
    let page
    switch(this.state.display){
      case 'signup': page = <SignupForm {...childrenProps} />;
      break
      case 'login': page = <LoginForm {...childrenProps} />;
      break
      default : page = <SignupForm {...childrenProps}/> // default is login
    }
    return page
  }
}
// Meteor data container
export default createContainer(() => {
  return {
    userId: Meteor.userId()
  };
}, Users);

Users.propTypes = {
  display : (props, propName, componentName)=>{
    if (! [
      'default',
      'signup',
      'login',
      'set-password',
      'forgotten-password'
    ].includes(props[propName])) return new Error('You must supply a page to display')
  },
  userId : PropTypes.string
}
