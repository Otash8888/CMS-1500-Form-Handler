import React from 'react'

const SignUpForm = (props) => {
    return (
      <div className="column1">
          <h2 className="ui primary image header">
            {/*<img src="assets/images/logo.png" className="image" />*/}
            <div className="content">
              Sign Up
            </div>
          </h2>
          <form className="ui medium form">
            <div className="ui stacked segment">
            <div className="field">
              <div className="ui left icon input">
                <i className="user outline icon"></i>
                <input onChange={(e) => {props.handleOnChange(e)}} type="text" name="first_name" placeholder="First Name" />
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <i className="user outline icon"></i>
                <input onChange={(e) => {props.handleOnChange(e)}} type="text" name="last_name" placeholder="Last Name" />
              </div>
            </div>

              <div className="field">
                <div className="ui left icon input">
                  <i className="address book icon"></i>
                  <input onChange={(e) => {props.handleOnChange(e)}} type="text" name="email" placeholder="E-mail address" />
                </div>
              </div>

              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input onChange={(e) => {props.handleOnChange(e)}} type="text" name="username" placeholder="Username" />
                </div>
              </div>

              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon"></i>
                  <input onChange={(e) => {props.handleOnChange(e)}} type="password" name="password" placeholder="Password" />
                </div>
              </div>
              <button onClick={props.handleOnSubmit} className="ui fluid large primary submit button">Sign Up</button>
            </div>

          </form>
        </div>
    )
  }

  export default SignUpForm
