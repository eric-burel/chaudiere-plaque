import React, {Component, PropTypes} from 'react'
//import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import TextField from 'material-ui/TextField'
import UsersPage from './UsersPage'

// TODO : use a global Users component instead, which print the correct form
// depending on the route and inject this kind of data
export default class Forgotten extends Component {
  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this) // manual binding
  }

  onSubmit(done){
    const email = this.refs.email.input.value.trim() // email is a TextField, input.value is the corresponding text
    Accounts.forgotPassword({email}, (err)=>{
      if(err){
        done(err,null)
      } else {
        done(null, "Mail envoyé")
      }
    })
  }


  render(){
    const formInputs = [
      <TextField
        floatingLabelText="Email"
        ref="email"
        type="email"
        fullWidth={true}
        />
    ]
    return(
    <UsersPage
      title="Mot de passe oublié"
      subtitle="Entrez votre adresse email pour récupérer un nouveau mot de passe."
      redirection="login"
      redirectionMessage="Retour à la page de connexion"
      buttonLabel="Envoyer le mail de récupération"
      formInputs={formInputs}
      changeDisplay={this.props.changeDisplay}
      styles={this.props.styles}
      onSubmit={this.onSubmit}
      />
  )
  }
}

Forgotten.propTypes = {
  userId : PropTypes.string,
  changeDisplay :  PropTypes.func.isRequired,
  styles: PropTypes.object.isRequired
}
