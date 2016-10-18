import React from 'react'
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import App from '../../core/components/App.jsx'

var coreRoutes = FlowRouter.group({
  prefix: '/',
  name: 'home',
  triggersEnter: [function(context, redirect) {
    console.log("You entered the core group")
  }]
});

// handling /admin route
coreRoutes.route('/', {
  action(params) {
    mount(App, {content: <div>This is the routing content</div>})
  },
  triggersEnter: [(context, redirect) => {
    console.log('running /home trigger')
  }]
});

/*myModuleRoutes.route('/a-route', {
  action: function() {
    ReactLayout.render('componentLayout', {content: 'a-route'});
  }
});*/
