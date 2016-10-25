/**
 * Reset a password, given the token send to the user by mail when pressing
 * "password forgotten".
 * Note : this component is only for password reset, not for password change
 */
import React, {Component, PropTypes} from 'react'
//import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import TextField from 'material-ui/TextField'
import UsersPage from './UsersPage'

export default class ResetPassword extends Component {
  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this) // manual binding
  }

  onSubmit(done){
    const password = this.refs.password.input.value.trim() // email is a TextField, input.value is the corresponding text
    Accounts.resetPassword(this.props.token, password, (err)=>{
      if (err) {
        done(err,null)
      } else {
        // TODO : print an alert to confirm success of the operation
        done(null, "Mot de passe changé avec succès !")
      }
    })
  }

  render(){
    const formInputs =[
      <TextField
        floatingLabelText="Nouveau mot de passe :"
        ref="password"
        type="password"
        fullWidth={true}
        />
    ]
    return(
      <UsersPage
        title="Mot de passe oublié"
        subtitle="Choisissez un nouveau mot de passe"
        onSubmit={this.onSubmit}
        buttonLabel="Changer mon mot de passe"
        formInputs={formInputs}
        changeDisplay={this.props.changeDisplay}
        styles={this.props.styles}
        secondaryButton="Retour vers la page de connexion"
        secondaryOnClick={()=>{this.props.changeDisplay('login')}}
      />
    )
  }
}
ResetPassword.propTypes = {
  userId : PropTypes.string,
  changeDisplay :  PropTypes.func.isRequired,
  token : PropTypes.string.isRequired,
  styles : PropTypes.object.isRequired
}
