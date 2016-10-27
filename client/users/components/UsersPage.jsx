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

// styles for the module
// each submodule can use the styles
const styles={
  titleDiv:{
    textAlign:'center'
  },
  buttonDiv:{
    paddingTop:'40px',
    paddingBottom:'20px'
  }
}

export default class UsersPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      error : null,
      message: null
    }
  }

  // call the parent submit handler, and then print error/messages
  // depending on the parent result
  // NOTE : the parent gets the form data by its own means, using refs
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

  // the parent pass form inputs as the children
  // here we simply separate them into rows
  renderFormInputs(inputs = []){
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

    /**
    * Render the title of the form , the subtitle, and a falcultative redirection button
    */
    renderHeader(){
      return(
        <div className="header" style={styles.titleDiv}>
          <h2>{this.props.title}</h2>
          {this.props.subtitle ? <p>{this.props.subtitle}</p> : null}
          {this.props.redirection ?
            <p><FlatButton
              className="redirection"
              onClick={()=>{this.props.changeDisplay(this.props.redirection)}}
              label={this.props.redirectionMessage}
              secondary={true}
              /></p>
            : null
          }
        </div>
      )
    }

    /**
    * Render the form itself
    */
    renderForm(){
      return(
        <form ref="form" onSubmit={this.handleSubmit.bind(this)}>
          {this.renderFormInputs(this.props.formInputs)}
          <div className="row" style={styles.buttonDiv}>
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
      )
    }

    /**
    * Render a facultative
    */
    renderFooter(){
      return(
        <div>
          {
            this.props.secondaryButton ?
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

      render(){
        return(
          <div>
            {this.renderHeader()}
            {this.renderForm()}
            {this.renderFooter()}
          </div>
        )
      }
    }

    UsersPage.propTypes = {
      title : PropTypes.string.isRequired,
      subtitle : PropTypes.string,
      changeDisplay : PropTypes.func.isRequired,
      buttonLabel : PropTypes.string.isRequired,
      onSubmit : PropTypes.func.isRequired,
      formInputs : PropTypes.array,
      redirection : PropTypes.string, // if there is a redirection button on the form
      redirectionMessage : PropTypes.string, // TODO : should check if redirectionMessage is defined when redirection is
      secondaryButton : PropTypes.string,
      secondaryOnClick : PropTypes.func
    }
