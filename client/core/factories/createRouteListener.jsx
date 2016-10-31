/**
* Have a stateless component to listen to the current route and group
*
* TODO : make it chainable so that it works with other props,
* such as Meteor.userIds
* @see Higher Order components
* 
* @param  {[type]} component [description]
* @return {[type]}           [description]
*/
import { createContainer } from 'meteor/react-meteor-data'
import { FlowRouter } from 'meteor/kadira:flow-router'

const createRouteListener = (component) => {
  return createContainer(()=>{
    FlowRouter.watchPathChange() // reactive
    const current = FlowRouter.current()
    // custom routes for each sub menu
    const currentRoute = current.route
    const currentGroup = current.route.group
    return {
      currentRoute,
      currentGroup
    }
  }, component)
}
export default createRouteListener
