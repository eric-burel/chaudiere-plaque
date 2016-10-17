import React, { Component } from 'react';

import Link from './Link.jsx'

// material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();
// material-ui components
import RaisedButton from 'material-ui/RaisedButton';

// App component - represents the whole app
export default class App extends Component {
  getLinks() {
    return [
      { _id: 1, name:'Meteor guide', url: 'https://guide.meteor.com/' },
      { _id: 2, name: 'React guide', url: 'https://facebook.github.io/react/docs/getting-started.html' },
      { _id: 3, name: 'Material-ui guide', url: 'http://www.material-ui.com/#/components/app-bar' },
      { _id: 4, name: 'Flexbox Grid', url: 'http://flexboxgrid.com/'}
    ];
  }

  renderLinks() {
    return this.getLinks().map((link) => (
      <Link key={link._id} link={link} />
    ));
  }

  render() {
    return (
      <MuiThemeProvider>
      <div className="container">
        <header>
          <h1>Chaudière Plaque</h1>
          <h2>French grade quality Meteor React boilerplate</h2>
        </header>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <RaisedButton label="I like Chaudière Plaque" primary={true}/>
          </div>
          <ul className="col-xs-12 col-md-6">
            {this.renderLinks()}
          </ul>
        </div>
      </div>
    </MuiThemeProvider>
    );
  }
}
