import React, {Component, PropTypes} from 'react'
//import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import FlatButton from 'material-ui/FlatButton'

// TODO : use a global Users component instead, which print the correct form
// depending on the route and inject this kind of data
export default class Forgotten extends Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this) // manual binding
  }

  handleSubmit(event){
    event.preventDefault() // prevent browser submition
    const email = this.refs.email.input.value.trim() // email is a TextField, input.value is the corresponding text
    Accounts.forgotPassword({email}, (err)=>{
      if(err){
        console.log(err)
      }
    })
  }


  render(){
    return(
      <div>
        <p><strong>Mot de passe oublié</strong></p>
        <p>Entrez votre adresse email pour récupérer un nouveau mot de passe.</p>
        <form ref="forgottenForm" onSubmit={this.handleSubmit}>
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
              <RaisedButton
                label="Récupérer mon mot de passe"
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

Forgotten.propTypes = {
  userId : PropTypes.string,
  changeDisplay :  PropTypes.func.isRequired
}
