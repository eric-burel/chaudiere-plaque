/**
*
* MenuBar
*
* Prints the title of the app, an icon that allow to open the left menu
*
*/
import React, {Component, PropTypes} from 'react'
import createRouteListener from '../factories/createRouteListener'
import mediaQueries from '../imports/mediaQueries'
import AppBar from 'material-ui/AppBar'
import MenuDrawer from './MenuDrawer'
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
          <MenuDrawer
            onRequestChange={(open) => this.setState({open})}
            open={this.state.open}
            toggle={()=>{this.toggle()}}
            />
        </div>
      )
    }
  }
  export default createRouteListener(MenuBar)

  MenuBar.propTypes = {

  }
