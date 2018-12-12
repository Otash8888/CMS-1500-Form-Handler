import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import Login   from './Components/Login'
import SignUp   from './Components/SignUp'
import PaperForm   from './Components/PaperForm'

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <div className="App">
            <Switch>
              <Route  exact path="/signup" component={SignUp}/>
              <Route  path="/" component={Login}/>
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
