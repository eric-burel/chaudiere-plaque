import React, {Component, PropTypes} from 'react'
import { createContainer } from 'meteor/react-meteor-data'
import { Meteor } from 'meteor/meteor'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'

import LogoutButton from './LogoutButton'

// TODO : use a global Users component instead, which print the correct form
// depending on the route and inject this kind of data
export default class SignupForm extends Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this) // manual binding
  }

  handleSubmit(event){
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
  }


  render(){
    let formOrLogout = ''
    if (!this.props.userId){
      formOrLogout =
      <form ref="signupForm" onSubmit={this.handleSubmit}>
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
              label="S'inscrire"
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
        <p><strong>Inscription</strong></p>
        <p><FlatButton
           onClick={()=>{this.props.changeDisplay('login')}}
           label="Déja inscrit ? Connectez-vous"
         /></p>
        {formOrLogout}
      </div>
    )
  }
}

SignupForm.propTypes = {
  changeDisplay : PropTypes.func.isRequired,
  userId : PropTypes.string
}
/* Example from React doc :

class MyForm extends React.Component {
constructor(props) {
super(props);
this.state = {value: 'Hello!'};
this.handleChange = this.handleChange.bind(this);
}

handleChange(event) {
this.setState({value: event.target.value});
}

render() {
return (
<input
type="text"
value={this.state.value}
onChange={this.handleChange}
/>
);
}
}
*/
