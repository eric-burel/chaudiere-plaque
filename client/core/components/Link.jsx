import React, { Component, PropTypes } from 'react';

// Link component - represents a single todo item
export default class Link extends Component {
  render() {
    return (
      <li>
        <a href={this.props.link.url} target="blank">
          {this.props.link.name}
        </a>
      </li>
    );
  }
}

Link.propTypes = {
  // This component gets the Link to display through a React prop.
  // We can use propTypes to indicate it is required
  link: PropTypes.object.isRequired,
}
