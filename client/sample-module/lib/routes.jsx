import React from 'react'
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

// App is the layout component, we can select any other component for the routing
// for example a router could handle a sidebar with
// ReactLayout.render(SideBar, {content : <Foobar/>})
import App from '../../core/components/App'
import ShowSampleModule from '../components/ShowSampleModule'

var myModuleRoutes = FlowRouter.group({
  prefix: '/sample-module',
  name: 'my-module',
  triggersEnter: [function(context, redirect) {
    console.log("You entered the module group")
  }]
});

// handling /admin route
myModuleRoutes.route('/', {
  action(params) {
    mount(App, {content: <ShowSampleModule />})
  },
  triggersEnter: [(context, redirect) => {
    console.log('running /sample-module trigger')
  }]
});

/*myModuleRoutes.route('/a-route', {
  action: function() {
    ReactLayout.render('componentLayout', {content: 'a-route'});
  }
});*/
