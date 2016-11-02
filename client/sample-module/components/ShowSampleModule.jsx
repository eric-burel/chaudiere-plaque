import React, { Component, PropTypes } from 'react';

import store from '../store/store'
// to provide the store to children
import { Provider } from 'react-redux'
import SampleModuleContainer from '../containers/SampleModuleContainer'

// Link component - represents a single todo item
export default class ShowSampleModule extends Component {
  render() {
    return (
      <Provider store={store}>
        <SampleModuleContainer/>
      </Provider>
    )
  }
}
