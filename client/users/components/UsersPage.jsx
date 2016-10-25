/**
* An abstract component representing any Users module page
*/
import React, { Component, PropTypes} from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import colors from 'material-ui/styles/colors'

// TODO : use a global Users component instead, which print the correct form
// depending on the route and inject this kind of data
const errorStyle={
  color:colors.red500,
  fontSize : '13px'
}
const messageStyle={
  color:colors.green500,
  fontSize : '13px'
}
export default class UsersPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      error : null,
      message: null
    }
  }

  handleSubmit(event){
    event.preventDefault()
    // we just submitted a form, so we hide error messages
    this.setState({error:null, message:null})
    this.props.onSubmit((err,msg)=>{
      if (err){
        this.setState({error:err.message})
      } else if (msg) {
        this.setState({message:msg})
      }
    })
  }

  renderFormInputs(inputs){
    let i =0
    return inputs.map((input)=>{
      i++
      return(
        <div className="row" key={i}>
          <div className="col-xs-12">
            {input}
          </div>
        </div>)
      })
    }

    render(){
      return(
        <div>
          <div style={this.props.styles.titleDiv}>
            <h2>{this.props.title}</h2>
            {this.props.subtitle ? <p>{this.props.subtitle}</p> : null}
            {this.props.redirection ?
              <p><FlatButton
                onClick={()=>{this.props.changeDisplay(this.props.redirection)}}
                label={this.props.redirectionMessage}
                secondary={true}
                /></p>
              : null
            }
          </div>
          <form ref="form" onSubmit={this.handleSubmit.bind(this)}>
            {this.renderFormInputs(this.props.formInputs)}
            <div className="row" style={this.props.styles.buttonDiv}>
              <div className="col-xs-12">
                {this.state.error ?
                  <p style={errorStyle}>Erreur : {this.state.error}</p>
                  : null
                }
                {this.state.message ?
                  <p style={messageStyle}>{this.state.message}</p>
                  : null
                }
                <RaisedButton
                  label={this.props.buttonLabel}
                  primary={true}
                  fullWidth={true}
                  onClick={this.handleSubmit.bind(this)}
                  />
              </div>
            </div>
          </form>
          {this.props.secondaryButton ?
            <p>
              <FlatButton
                label={this.props.secondaryButton}
                onClick={this.props.secondaryOnClick}
                />
            </p>
            :null}
          </div>
        )
      }
    }

    UsersPage.propTypes = {
      changeDisplay : PropTypes.func.isRequired,
      styles : PropTypes.object.isRequired,
      buttonLabel : PropTypes.string.isRequired,
      title : PropTypes.string.isRequired,
      subtitle : PropTypes.string,
      onSubmit : PropTypes.func.isRequired,
      formInputs : PropTypes.array.isRequired,
      redirection : PropTypes.string, // if there is a redirection button on the form
      redirectionMessage : PropTypes.string, // TODO : should check if redirectionMessage is defined when redirection is
      secondaryButton : PropTypes.string,
      secondaryOnClick : PropTypes.func
    }
