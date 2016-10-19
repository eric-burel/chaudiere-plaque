/**
 * Method for the user authentication (signup, login, forgotten password...)
 */
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

Meteor.methods({
  'user.signup': (email, password) => {
    // TODO : check that email is an email
    // TODO : check that both params are strings
    const userId = Accounts.createUser({email, password})
    return userId
  }
})
