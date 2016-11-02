/**
* Left menu that appears when clicking the menu icon
*/
import React, {Component, PropTypes} from 'react'
import createRouteListener from '../factories/createRouteListener'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'
import {Menu, MenuItem } from 'material-ui/Menu'
import {FlowRouter} from 'meteor/kadira:flow-router'
// Drawer is dark
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

class MenuDrawer extends Component {
  constructor(){
    super()
    const newLink = (label, routeName, external)=>{
      return {key:routeName, label, routeName, external}
    }
    this.externalLinks =  [
      newLink('Meteor guide','https://guide.meteor.com/',true),
      newLink('React guide','https://facebook.github.io/react/docs/getting-started.html',true),
      newLink('Flexbox Grid','http://flexboxgrid.com/',true),
      newLink('Material-ui guide','http://www.material-ui.com/#/components/app-bar',true),
      newLink('Radium CSS','https://formidable.com/open-source/radium/docs/api',true),
      newLink('Enzyme (React testing)','http://airbnb.io/enzyme/docs/guides.html',true),
      newLink('Mocha (test framework)','https://mochajs.org/',true),
      newLink('Chai (assertion)', 'http://chaijs.com/api/assert/',true),
      newLink('Sinon (spy, stubs and mock)', 'http://sinonjs.org/docs/',true)
    ]
  }

  buildOnClick(link){
    if (link.external){
      return ()=>{window.open(link.routeName, '_blank')} // external links are opend in a new tab/window
    } else {
      return ()=>{FlowRouter.go(link.routeName)}
    }
  }

  renderLinks(links){
    return links.map((link)=>{
      return(
        <MenuItem
          key={link.routeName}
          value={link.routeName}
          primaryText={link.label}
          onClick={this.buildOnClick(link)}
          />
      )
    })
  }

  renderDrawerMenu(){
    return(
      <div>
        <AppBar title="Menu" showMenuIconButton={false}
          iconClassNameRight="fa fa-chevron-left"
          onRightIconButtonTouchTap={()=>{this.props.toggle()}}/>
        <Subheader>External links</Subheader>
        <Menu value={this.props.currentRoute}>
          {this.renderLinks(this.externalLinks)}
        </Menu>
        <Divider></Divider>
      </div>
    )
  }


  render(){
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Drawer
          docked={false}
          open={this.props.open}
          onRequestChange={this.props.onRequestChange}
          >
          {this.renderDrawerMenu()}
        </Drawer>
      </MuiThemeProvider>
    )
  }
}
export default createRouteListener(MenuDrawer)

MenuDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onRequestChange : PropTypes.func.isRequired,
  toggle : PropTypes.func.isRequired,
  //@see https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  /*links: PropTypes.arrayOf(PropTypes.shape({
  routeName: PropTypes.string.isRequired,
  external: PropTypes.bool,
  label : PropTypes.string.isRequired,
  })),*/
  currentRoute : PropTypes.object.isRequired // passed by Meteor


}
