import React, { Component, PropTypes } from 'react';
// material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

// material-ui components
// core components
import Header from './Header'
import MenuBar from './MenuBar'
import Footer from './Footer'
import Users from '../../users/components/Users'


// App component - represents the whole app
export default class App extends Component {
  constructor() {
    super()
    this.state = {}
    this.title = "Chaudière Plaque"
  }



  // NOTE: this.props.content is handled by the router
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div>
          <Header/>
            <MenuBar />
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
    )
  }
}

App.propTypes = {
  // content is handled by the router
  content: PropTypes.object.isRequired,
}
