const project = (state = {}, action)=>{
  switch(action.type){
    case 'ADD_PROJECT':{
      return {
        id: action.id,
        project:action.project,
      }
    }
  }
  return state
}
const projects = (state=[], action)=>{
  switch(action.type){
    case 'ADD_PROJECT':[
      ...state,
      project(undefined, action) // create a project
    ]
  }
  return state
}
export default projects
