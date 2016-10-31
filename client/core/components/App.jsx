import React, { Component, PropTypes } from 'react';

// material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// material-ui components
import RaisedButton from 'material-ui/RaisedButton'
import AppBar from 'material-ui/AppBar'
// core components
import Header from './Header'
import Menu from './Menu'
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
    const newLink = (label, routeName, external)=>{
      return {key:routeName, label, routeName, external}
    }
    return [
      newLink('Meteor guide','https://guide.meteor.com/',true),
      newLink('React guide','https://facebook.github.io/react/docs/getting-started.html',true),
      newLink('Flexbox Grid','http://flexboxgrid.com/',true),
      newLink('Material-ui guide','http://www.material-ui.com/#/components/app-bar',true),
      newLink('Radium CSS','https://formidable.com/open-source/radium/docs/api',true),
      newLink('Enzyme (React testing)','http://airbnb.io/enzyme/docs/guides.html',true),
      newLink('Mocha (test framework)','https://mochajs.org/',true),
      newLink('Chai (assertion)', 'http://chaijs.com/api/assert/',true),
      newLink('Sinon (spy, stubs and mock)', 'http://sinonjs.org/docs/',true)
    ];
  }


  // NOTE: this.props.content is handled by the router
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header/>
          <Menu
            links={this.getLinks()}
            />
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
