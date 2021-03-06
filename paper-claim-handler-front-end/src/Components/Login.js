import React, { Component } from 'react'
import LoginForm from './LoginForm.js'
import SignUp from './SignUp.js'
import HomePage from './HomePage.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginUser, authorizeToken } from '../actions/LoginAndSignUpActions.js'


class Login extends Component {

  state = {
    email: null,
    password: null
  }

  componentDidMount() {
      const token = localStorage.getItem("token")
      this.props.authorizeToken(token)
    }

  handleLoginFormChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleLoginSubmit = (e) => {
    e.preventDefault()
    this.props.login(this.state)
  }

  mainPage = () => {
    if (this.props.user.id != null) {
      return (<HomePage />)
    } else {
      return (<LoginForm handleLoginSubmit={this.handleLoginSubmit} handleLoginFormChange={this.handleLoginFormChange} />)
    }
  }


  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
        <Switch>
          <Route exact path="/signup" render={(props) => <SignUp history={props.history} adapter={this.adapter} handleSignUp={this.handleSignUp} />} />
          <Route path="/" render={() => this.mainPage()} />
        </Switch>
        </React.Fragment>
      </BrowserRouter>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (loginObj) => dispatch(loginUser(loginObj)),
    authorizeToken: (token) => dispatch(authorizeToken(token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
