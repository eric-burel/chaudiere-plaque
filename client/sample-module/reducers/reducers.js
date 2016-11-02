/**
 * We combine reducers into one reducers that can handle all states
 */
import { combineReducers } from 'redux'
import projects from './projects'
import sample from './sample'

const sampleModuleReducers = combineReducers({
  projects,
  sample
})
export default sampleModuleReducers
