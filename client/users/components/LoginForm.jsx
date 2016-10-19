import React, {Component, PropTypes} from 'react'
import { Meteor } from 'meteor/meteor'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
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
    return(
      <div>
        <p><strong>Connexion</strong></p>
        <p><FlatButton
          onClick={()=>{this.props.changeDisplay('signup')}}
          label="Pas encore inscrit ? Créez votre compte"
          /></p>

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
        <div>
          <FlatButton
            label="Mot de passe oublié"
            onClick={()=>this.props.changeDisplay('forgotten')}
          />
        </div>
      </div>
    )
  }
}

LoginForm.propTypes = {
  userId : PropTypes.string,
  changeDisplay :  PropTypes.func.isRequired
}
