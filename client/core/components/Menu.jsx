/**
* A menu component
*
* The menu is always a smart component, as it must listen to route for
* synchronization
*
* TODO :should be undocked on mobiles, docked on large screens
*/
import React, {Component, PropTypes} from 'react'
import createRouteListener from '../factories/createRouteListener'
import mediaQueries from '../imports/mediaQueries'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import {Menu, MenuItem } from 'material-ui/Menu'
import {FlowRouter} from 'meteor/kadira:flow-router'

class MenuBar extends Component {
  constructor(){
    super()
    // we dock only on large devices
    this.isMobile = !mediaQueries.isMd()
    this.state = {
      open: false
    }
    this.toggle.bind(this)
  }
  toggle(){
    this.setState({
      open: !this.state.open
    })
  }

  buildOnClick(link){
    if (link.external){
      return ()=>{window.open(link.routeName, '_blank')} // external links are opend in a new tab/window
    } else {
      return ()=>{FlowRouter.go(link.routeName)}
    }
  }

  renderMenuItems(){
    return this.props.links.map((link)=>{
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

  renderMenu(){
    return(
      <Menu value={this.props.currentRoute}>
        {this.renderMenuItems()}
      </Menu>
    )
  }


  render(){
    return (
      <div>
        <AppBar
          title="Chaudière Plaque"
          onLeftIconButtonTouchTap={()=>{this.toggle()}}
          onTitleTouchTap={()=>{FlowRouter.go('/')}}
          onRightIconButtonTouchTap={ ()=>{ window.open(
            'https://github.com/lebrun-burel/chaudiere-plaque','_blank')}}
          iconClassNameRight="fa fa-github"
          />
        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
          >
          {this.renderMenu()}
        </Drawer>
      </div>
    )
  }
}
export default createRouteListener(MenuBar)

MenuBar.propTypes = {
  //@see https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  links: PropTypes.arrayOf(PropTypes.shape({
    routeName: PropTypes.string.isRequired,
    external: PropTypes.bool,
    label : PropTypes.string.isRequired,
  })),
  currentRoute : PropTypes.object.isRequired // passed by Meteor

}
