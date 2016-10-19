import React, {Component, PropTypes} from 'react'
import { Meteor } from 'meteor/meteor'
import RaisedButton from 'material-ui/RaisedButton'

export default class LogoutButton extends Component {
  constructor(props){
    super(props)
    // manual binding to this object
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    // TODO : logout user
    Meteor.logout((err)=>{
      if (err) console.log(err)
    })
  }
  render(){
    const button = this.props.userId ?
    <RaisedButton
      label="Déconnexion"
      primary={true}
      onClick = {this.handleClick}
      />
    : null
    return button
  }

}
// useId is passed as a prop
LogoutButton.propTypes = {
  userId : PropTypes.string.isRequired
}
