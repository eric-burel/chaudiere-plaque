import React, {Component, PropTypes} from 'react'
import { Meteor } from 'meteor/meteor'
import TextField from 'material-ui/TextField'

import UsersPage from './UsersPage'

// TODO : use a global Users component instead, which print the correct form
// depending on the route and inject this kind of data
export default class SignupForm extends Component {
  constructor(props){
    super(props)
    //this.handleSubmit = this.handleSubmit.bind(this) // manual binding
    this.onSubmit = this.onSubmit.bind(this)
  }

  /*handleSubmit(event){
    event.preventDefault() // prevent browser submition
    const email = this.refs.email.input.value.trim() // email is a TextField, input.value is the corresponding text
    const password = this.refs.password.input.value.trim()
    Meteor.call('user.signup', email, password, (err, userId)=>{
      if (err){
        console.log(err)
      } else {
        // then we login the user
        Meteor.loginWithPassword(email, password, (err)=>{
          if (err){
            console.log(err)
          } else {
          }
        })
      }
    })
  }*/
  onSubmit(done){
    const email = this.refs.email.input.value.trim() // email is a TextField, input.value is the corresponding text
    const password = this.refs.password.input.value.trim()
    Meteor.call('user.signup', email, password, (err, userId)=>{
      if (err){
        done(err,null)
      } else {
        // then we login the user
        Meteor.loginWithPassword(email, password, (err)=>{
          if (err){
            done(err,null)
          } else {
            done()
          }
        })
      }
    })
  }


  render(){
    const formInputs =[
          <TextField
            ref="email"
            floatingLabelText="Email"
            key="email"
            type="email"
            fullWidth={true}
            />,
          <TextField
            ref="password"
            floatingLabelText="Mot de passe"
            key="password"
            type="password"
            fullWidth={true}
            />
        ]

    return (
      <UsersPage
      title="Inscription"
      redirection="login"
      redirectionMessage= "Déjà inscrit ? Connectez-vous"
      buttonLabel="S'inscrire"
      formInputs={formInputs}
      changeDisplay={this.props.changeDisplay}
      styles={this.props.styles}
      onSubmit={this.onSubmit}
      />
    )
  }
}

SignupForm.propTypes = {
  changeDisplay : PropTypes.func.isRequired,
  userId : PropTypes.string,
  styles : PropTypes.object.isRequired
}
