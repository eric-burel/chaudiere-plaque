import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'

Meteor.startup(() => {
  // change the reset password url
  // (works with enrollment, and verification too)
  Accounts.urls.resetPassword = function(token) {
    return Meteor.absoluteUrl('user/reset-password/' + token);
  };
});
