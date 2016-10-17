import React, { Component } from 'react';

import Link from './Link.jsx'


// App component - represents the whole app
export default class App extends Component {
  getLinks() {
    return [
      { _id: 1, name:'Meteor guide', url: 'https://guide.meteor.com/' },
      { _id: 2, name: 'React guide', url: 'https://facebook.github.io/react/docs/getting-started.html' },
      { _id: 3, name: 'Material-ui guide', url: 'http://www.material-ui.com/#/components/app-bar' },
    ];
  }

  renderLinks() {
    return this.getLinks().map((link) => (
      <Link key={link._id} link={link} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Chaudière Plaque</h1>
          <h2>French grade quality Meteor React boilerplate</h2>
        </header>
        <ul>
          {this.renderLinks()}
        </ul>
      </div>
    );
  }
}
