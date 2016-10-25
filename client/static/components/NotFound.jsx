import React, {Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton'

export default class Privacy extends Component{
  render(){
    return(
      <div className="row center-xs">
        <div className="col-xs-12">
          <span style={{fontSize:100}}>404</span>
          <span style={{fontSize:30}}>ERROR</span>
          <p>This page does no longer exists or haven't been created yet, sorry !</p>
          <RaisedButton
            label="Back to home"
            primary={true}
            href="/"
            />
        </div>
      </div>
    )
  }
}
