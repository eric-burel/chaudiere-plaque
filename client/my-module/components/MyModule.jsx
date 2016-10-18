import React, { Component, PropTypes } from 'react';

// Link component - represents a single todo item
export default class MyModule extends Component {
  render() {
    return (
      <div>
        <h1>Accessing my module</h1>
        <p>Option passed : {this.props.option}</p>
      </div>
    );
  }
}

MyModule.propTypes = {
  // This component gets the Link to display through a React prop.
  // We can use propTypes to indicate it is required
  option: PropTypes.object.isRequired,
}
