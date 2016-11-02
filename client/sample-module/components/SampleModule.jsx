import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton'


// Link component - represents a single todo item
export default class SampleModule extends Component {
  render() {
    return (
      <div>
        <h1>Accessing my module</h1>
        <p>Option passed : {this.props.option}</p>
        <RaisedButton label="Click me !" onClick={this.props.onActionButtonClick}/>
        <p>Clicked {this.props.actionCount} times</p>
      </div>
    );
  }
}

SampleModule.propTypes = {
  // This component gets the Link to display through a React prop.
  // We can use propTypes to indicate it is required
  option: PropTypes.object,
  actionCount : PropTypes.number.isRequired,
  onActionButtonClick: PropTypes.func.isRequired,
}
