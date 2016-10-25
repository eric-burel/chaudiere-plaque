import React, {Component, PropTypes} from 'react'
import { Meteor } from 'meteor/meteor'
import TextField from 'material-ui/TextField'
import UsersPage from './UsersPage'


// TODO : use a global Users component instead, which print the correct form
// depending on the route and inject this kind of data
export default class LoginForm extends Component {
  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this) // manual binding
  }

  onSubmit(done){
    const email = this.refs.email.input.value.trim() // email is a TextField, input.value is the corresponding text
    const password = this.refs.password.input.value.trim()
    Meteor.loginWithPassword(email, password, (err)=>{
      if (err){
        done(err, null)
      } else {
        done()
      }
    })
  }



  render(){
    const formInputs = [
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
      title="Login"
      redirection="signup"
      redirectionMessage= "Pas encore membre ? Inscrivez-vous"
      buttonLabel="Se connecter"
      formInputs={formInputs}
      changeDisplay={this.props.changeDisplay}
      styles={this.props.styles}
      onSubmit={this.onSubmit}
      secondaryButton="Mot de passe oublié ?"
      secondaryOnClick={()=>this.props.changeDisplay('forgotten')}
      />
    )
  }
}

LoginForm.propTypes = {
  userId : PropTypes.string,
  changeDisplay :  PropTypes.func.isRequired,
  styles : PropTypes.object.isRequired
}
