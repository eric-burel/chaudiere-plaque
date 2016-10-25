import React, {Component} from 'react'

import { FlowRouter } from 'meteor/kadira:flow-router'
import FlatButton from 'material-ui/FlatButton'

export default class Footer extends Component {
  constuctor(){
  }
  getLinks(){
    return [
      {key:'legal-terms', label:"Mentions légales", href:FlowRouter.path('legal-terms')},
      {key:'privacy', label:"Vie privée", href:FlowRouter.path('privacy')},
      {key:'security', label:"Sécurité", href:FlowRouter.path('security')}
    ]

  }

  // Footer links
  renderLinks(){
    return this.getLinks().map((link)=>{
      return(
        <FlatButton
          {...link}
          labelStyle={{fontSize:"11px"}}
          />
      )
    })
  }

  render(){
    return (
      <footer>
        <div className="row center-xs">
          <div className="col-xs-12">
            {this.renderLinks()}
          </div>
        </div>
        <div className="row center-xs">
          <div className="col-xs-12">
            <p>French Grade Quality Boilerplate, by
              <a href="http://www.lebrun-burel.com" target="blank">
                Lebrun Burel Computer Science
              </a>
            </p>
          </div>
        </div>
      </footer>
    )
  }
}
