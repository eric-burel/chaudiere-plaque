import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'

Meteor.startup(() => {
  // Meteor.settings contains the object in the settings file specified using
  // the --settings argument on meteor run
  // NOTE : this may be removed in the future, when a definitive mail client is installed
  process.env.MAIL_URL = Meteor.settings.MAIL_URL
  //process.env.MY_VARIABLE = Meteor.settings.MY_VARIABLE

  // change the reset password url
  // (works with enrollment, and verification too)
  Accounts.urls.resetPassword = function(token) {
    return Meteor.absoluteUrl('user/reset-password/' + token);
  };
});
