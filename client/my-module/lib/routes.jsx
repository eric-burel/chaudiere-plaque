import React from 'react'
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

// App is the layout component, we can select any other component for the routing
// for example a router could handle a sidebar with
// ReactLayout.render(SideBar, {content : <Foobar/>})
import App from '../../core/components/App.jsx'
import MyModule from '../components/MyModule.jsx'

var myModuleRoutes = FlowRouter.group({
  prefix: '/my-module',
  name: 'my-module',
  triggersEnter: [function(context, redirect) {
    console.log("You entered the module group")
  }]
});

// handling /admin route
myModuleRoutes.route('/', {
  action(params) {
    mount(App, {content: <MyModule option={params.option} />})
  },
  triggersEnter: [(context, redirect) => {
    console.log('running /my-modyle trigger')
  }]
});

/*myModuleRoutes.route('/a-route', {
  action: function() {
    ReactLayout.render('componentLayout', {content: 'a-route'});
  }
});*/
