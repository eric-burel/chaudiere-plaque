// @see https://github.com/acdlite/flux-standard-action
export const ADD_TODO = "ADD_TODO"
export const SAMPLE_ACTION = "SAMPLE_ACTION"
export const FETCH_PROJECTS = "FETCH_PROJECTS"

let nextProjectId = 0
// create a sampleAction
export const sampleAction = ()=>{
  // NOTE : I can be async, inpure
  return {
    type: SAMPLE_ACTION,
    id: nextProjectId++,
    payload : {some:"custom", data:/!/g},
    error : false // I am NOT an error action
  }
}
export const addProject = project=>{
  return{
    type:"ADD_PROJECT",
    project
  }
}
// this is a thunk, it returns a function instead of an action =>
// we need redux-thunk middleware to handle this action on dispatch
export const fetchProjects = nb=>{
  return ()=> Meteor.call('projects.fetch', nb)
}
