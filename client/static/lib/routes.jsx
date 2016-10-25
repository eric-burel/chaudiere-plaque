import React from 'react'
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';


import LegalTerms from '../components/LegalTerms'
import Security from '../components/Security'
import Privacy from '../components/Privacy'

import App from '../../core/components/App.jsx'


FlowRouter.route('/legal-terms', {
  action() {
    mount(App, {content: <LegalTerms/>})
  }
})
FlowRouter.route('/privacy', {
  name:'privacy',
  action() {
    mount(App, {content: <Privacy/>})
  }
})
FlowRouter.route('/security', {
  name:'security',
  action() {
    mount(App, {content: <Security/>})
  }
})
