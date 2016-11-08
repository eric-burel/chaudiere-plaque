import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
// TODO : add the logger middleware
import sampleApp from '../reducers/reducers'
const store = createStore(sampleApp,
  applyMiddleware(thunkMiddleware)
)
export default store
