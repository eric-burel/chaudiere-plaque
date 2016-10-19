/**
 * Reset a password, given the token send to the user by mail when pressing
 * "password forgotten".
 * Note : this component is only for password reset, not for password change
 */
import React, {Component, PropTypes} from 'react'
//import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import FlatButton from 'material-ui/FlatButton'

export default class ResetPassword extends Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this) // manual binding
  }

  handleSubmit(event){
    event.preventDefault() // prevent browser submition
    const password = this.refs.password.input.value.trim() // email is a TextField, input.value is the corresponding text
    Accounts.resetPassword(this.props.token, password, (err)=>{
      if (err) {
        console.log(err)
      } else {
        // TODO : print an alert to confirm success of the operation
        this.props.changeDisplay('login')
      }
    })
  }

  render(){
    return(
      <div>
        <p><strong>Mot de passe oublié</strong></p>
        <p>Choisissez un nouveau mot de passe</p>
        <form ref="forgottenForm" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-xs-12">
              <TextField
                floatingLabelText="Nouveau mot de passe :"
                ref="password"
                type="password"
                fullWidth={true}
                />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <RaisedButton
                label="Changer mon mot de passe"
                primary={true}
                fullWidth={true}
                onClick={this.handleSubmit}
                />
            </div>
          </div>
        </form>
        <p><FlatButton
          onClick={()=>{this.props.changeDisplay('login')}}
          label="Retour vers la page de connexion"
          /></p>
      </div>
    )
  }
}
ResetPassword.propTypes = {
  userId : PropTypes.string,
  changeDisplay :  PropTypes.func.isRequired,
  token : PropTypes.string.isRequired
}
