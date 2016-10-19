import React from 'react'
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import App from '../../core/components/App.jsx'
import Users from '../components/Users.jsx'

var usersRoutes = FlowRouter.group({
  prefix: '/user',
  name: 'user',
  triggersEnter: [function(context, redirect) {
    console.log("You entered the user group")
  }]
});

// handling /admin route
usersRoutes.route('/', {
  action(params) {
    mount(App, {content: <Users display="default" option={params.option} />})
  },
  triggersEnter: [(context, redirect) => {
  }]
});
usersRoutes.route('/login', {
  action(params) {
    mount(App, {content: <Users display="login" option={params.option} />})
  },
  triggersEnter: [(context, redirect) => {
  }]
});
usersRoutes.route('/signup', {
  action(params) {
    mount(App, {content: <Users display="signup" option={params.option} />})
  },
  triggersEnter: [(context, redirect) => {
  }]
});
usersRoutes.route('/reset-password/:token', {
  action(params) {
    mount(App, {content: <Users display="reset-password" token={params.token} option={params.option} />})
  },
  triggersEnter: [(context, redirect) => {
  }]
});
usersRoutes.route('/forgotten-password', {
  action(params) {
    mount(App, {content: <Users display="forgotten-password" option={params.option} />})
  },
  triggersEnter: [(context, redirect) => {
  }]
});

/*myModuleRoutes.route('/a-route', {
  action: function() {
    ReactLayout.render('componentLayout', {content: 'a-route'});
  }
});*/
