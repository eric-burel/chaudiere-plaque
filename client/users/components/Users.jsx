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

class Users extends Component {
  constructor(props){
    super(props)
    this.state = {
      display : props.display
    }
  }
  render(){
    let page
    switch(this.props.display){
      case 'signup': page = <SignupForm userId={this.props.userId}/>; break
      default : page = <SignupForm userId={this.props.userId}/> // default is login
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
