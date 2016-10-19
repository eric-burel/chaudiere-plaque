import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export default class SignupForm extends Component {

  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this) // manual binding
  }

  handleSubmit(event){
    event.preventDefault() // prevent browser submition
    const email = this.refs.email.input.value.trim() // email is a TextField, input.value is the corresponding text
    const password = this.refs.password.input.value.trim()
    // TODO : create the account
  }
  render(){
    return(
      <div>
        <p><strong>Inscription</strong></p>
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
      </div>
    )
  }

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
