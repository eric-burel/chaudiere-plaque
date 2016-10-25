import React from 'react'
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import NotFound from '../../static/components/NotFound'

import App from '../../core/components/App.jsx'

var coreRoutes = FlowRouter.group({
  prefix: '/',
  name: 'home',
  triggersEnter: [function(context, redirect) {
    console.log("You entered the core group")
  }]
});

coreRoutes.route('/', {
  action(params) {
    mount(App, {content: <div>This is the routing content</div>})
  },
  triggersEnter: [(context, redirect) => {
    console.log('running /home trigger')
  }]
});

// 404 route
FlowRouter.notFound = {
    action: function() {
      mount(App, {content: <NotFound />})
    }
};

/*myModuleRoutes.route('/a-route', {
  action: function() {
    ReactLayout.render('componentLayout', {content: 'a-route'});
  }
});*/
