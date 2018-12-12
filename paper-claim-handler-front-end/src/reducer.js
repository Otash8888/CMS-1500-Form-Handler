const initialState = {
 user: {
   id: null,
   username: null,
   first_name: null,
   last_name: null,
   email: null
  }

}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USER_DATA":
      return {...state, user:{...action.payload}}
    default:
      return state
  }
}
