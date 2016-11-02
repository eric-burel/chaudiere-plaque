// @see https://github.com/acdlite/flux-standard-action
export const ADD_TODO = "ADD_TODO"
export const SAMPLE_ACTION = "SAMPLE_ACTION"

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
