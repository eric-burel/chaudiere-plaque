import {SAMPLE_ACTION} from '../actions/actions'
const sample = (state = {actionCount : 0}, action)=>{
  switch(action.type){
    case "SAMPLE_ACTION":{
      return {
        lastPayload: action.payload,
        actionCount: action.id,
      }
    }
  }
  return state
}
export default sample
