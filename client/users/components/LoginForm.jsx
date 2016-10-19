import React, {Component, PropTypes} from 'react'
import { createContainer } from 'meteor/react-meteor-data'
import { Meteor } from 'meteor/meteor'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import LogoutButton from './LogoutButton'
import FlatButton from 'material-ui/FlatButton'

// TODO : use a global Users component instead, which print the correct form
// depending on the route and inject this kind of data
export default class LoginForm extends Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this) // manual binding
  }

  handleSubmit(event){
    event.preventDefault() // prevent browser submition
    const email = this.refs.email.input.value.trim() // email is a TextField, input.value is the corresponding text
    const password = this.refs.password.input.value.trim()
    Meteor.loginWithPassword(email, password, (err)=>{
      if (err){
        console.log(err)
      } else {
      }
    })
  }


render(){
  let formOrLogout = ''
  if (!this.props.userId){
    formOrLogout =
    <form ref="loginForm" onSubmit={this.handleSubmit}>
      <div className="row">
          <div className="col-xs-12">
            <TextField
              floatingLabelText="Email"
              ref="email"
              type="email"
              fullWidth={true}
              />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <TextField
              floatingLabelText="Mot de passe"
              ref="password"
              type="password"
              fullWidth={true}
              />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <RaisedButton
              label="Connexion"
              primary={true}
              fullWidth={true}
              onClick={this.handleSubmit}
              />
          </div>
        </div>
      </form>
    } else {
      // already logged in
      formOrLogout =
      <div>
        <p>Vous êtes déjà connecté.</p>
        <LogoutButton userId={this.props.userId}/>
      </div>
    }

    return(
      <div>
        <p><strong>Connexion</strong></p>
        <p><FlatButton
           onClick={()=>{this.props.changeDisplay('signup')}}
           label="Pas encore inscrit ? Créez votre compte"
         /></p>
        {formOrLogout}
      </div>
    )
  }
}

LoginForm.propTypes = {
  userId : PropTypes.string
}
