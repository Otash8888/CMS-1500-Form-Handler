import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import MainForm1 from './FormComponents/MainForm1'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class HomePage extends Component {

  state={
    auth:true
  }

  handleChange = event => {
    this.setState({ auth: event.target.checked });
    localStorage.removeItem("token")
    window.location.reload()
  };


  render() {
    const { auth } = this.state;
    return (
      <div>

        <MuiThemeProvider>
          <React.Fragment>
            <FormGroup style={{display: "flex", float: "right"}}>
              <FormControlLabel
                control={
                  <Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" color="primary" />
                }
                label={auth ? 'Logout' : 'Login'}
              />
            </FormGroup>
            <AppBar title="CM 1500 FORM" />
            < MainForm1 />
          </React.Fragment>
        </MuiThemeProvider>


      </div>
    )
  }

}







export default HomePage
