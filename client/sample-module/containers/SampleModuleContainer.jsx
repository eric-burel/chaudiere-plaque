/**
 * NOTE :  without react-redux, we would instead apply store.subscribe(store.getState())
 * during construction, and call manyally mapStateToProps and mapDispatchToProps
 */
import { connect } from 'react-redux'
import { sampleAction, addProject } from '../actions/actions'
import SampleModule from '../components/SampleModule'


// pass the store state to the children
const mapStateToProps = (state) => {
  return {
    actionCount: state.sample.actionCount
  }
}

// pass callbacks to the children
// those callback are pure, they simply dispatch to the store
const mapDispatchToProps = (dispatch) => {
  return {
    onActionButtonClick: () => {
      dispatch(sampleAction())
    },
    onAddProjectButtonClick: project =>{
      dispatch(addProject(project))
    }
  }
}
// build the container using react-redux connect helper
const SampleModuleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SampleModule)

export default SampleModuleContainer
