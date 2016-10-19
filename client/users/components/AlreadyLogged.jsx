import React, {Component, PropTypes} from 'react'
//import { Meteor } from 'meteor/meteor'

import FlatButton from 'material-ui/FlatButton'
import LogoutButton from './LogoutButton'

// TODO : use a global Users component instead, which print the correct form
// depending on the route and inject this kind of data
export default class AlreadyLogged extends Component {
  constructor(props){
    super(props)
  }



  render(){
    // if not logged in, we go to the login page
    if (!this.props.userId){
      this.props.changeDisplay('login')
      return null
    } else {
      return (
        <div>
          <p>Vous êtes déjà connecté.</p>
          <FlatButton
            label="Retour à l'accueil"
            href="/"
            />
          <LogoutButton userId={this.props.userId}/>
        </div>
      )
    }
  }
}

AlreadyLogged.propTypes = {
  changeDisplay : PropTypes.func.isRequired,
  userId : PropTypes.string
}
