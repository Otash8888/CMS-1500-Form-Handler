const setUserData = (userObj) => ({type: 'SET_USER_DATA', payload: userObj})
export const loginUser = (credentials) => {
  return (dispatch) => {
    fetch(('http://localhost:3000/api/v1/auth/login'), {
      method: 'POST',
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials),
    }).then(res => res.json())
  .then(resObj => {
    if (resObj.error == null) {
      localStorage.setItem("token", resObj.access_token)
      dispatch(setUserData(resObj.user))
    } else {
      alert('Invalid username and password')
    }
  })
}
}


export const authorizeToken = (token) => {
  return (dispatch) => {
    return fetch(('http://localhost:3000/api/v1/authorize_token'), {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${token}`,
      },
    }).then(res => res.json())
      .then(userObj => {
        if (userObj.errors == null) {
          // console.log(userObj);
          dispatch(setUserData(userObj))
        } else {
          localStorage.removeItem("token")
        }
      })
  }
}


export const signUp = (credentials) => {
  return (dispatch) => {
    return fetch(('http://localhost:3000/api/v1/auth/register'), {
      method: 'POST',
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials),
    }).then(res => res.json())
      .then(result => {
        if (result.message === "User created successfully") {
          alert("Acount created Successfully")
          return {message: "Success"}
        } else {
          return {message: "Fail", errors: result}
        }
      })
  }
}

export const saveRecipientInfo = (data) => {
  const token = localStorage.getItem("token")
  return (dispatch) => {
    return fetch(('http://localhost:3000/api/v1/create/recipients'), {
      method: 'POST',
      headers: {
          "Content-Type": "application/json",
          "Authorization": `${token}`,
      },
      body: JSON.stringify(data),
    }).then(res => res.json())
      .then(result => {
        console.log(result)
      })
  }
}
