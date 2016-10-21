import React, { Component, PropTypes } from 'react';

// material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// material-ui components
import RaisedButton from 'material-ui/RaisedButton'
import AppBar from 'material-ui/AppBar'
// core components
import Header from './Header'
import Footer from './Footer'
import Link from './Link'
import Users from '../../users/components/Users'


// App component - represents the whole app
export default class App extends Component {
  constructor() {
    super()
    this.state = {}
    this.title = "Chaudière Plaque"
  }

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

  // NOTE: this.props.content is handled by the router
  render() {
    return (
      <MuiThemeProvider>
        <div className="container-fluid">
          <Header/>
          <AppBar
            title={this.title}
            />
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <RaisedButton label="I like Chaudière Plaque" primary={true}/>
            </div>
            <ul className="col-xs-12 col-md-6">
              {this.renderLinks()}
            </ul>
          </div>
          <div className="row">
            <div className="col-xs-12">
              {this.props.content}
            </div>
          </div>
          <div className="row center-xs">
            <div className="col-xs-12 col-md-4 col-lg-3">
              <Users display="default"/>
            </div>
          </div>
          <Footer/>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  // content is handled by the router
  content: PropTypes.object.isRequired,
}
