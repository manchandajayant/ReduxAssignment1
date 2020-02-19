const initialState = { email: "", cpassword: "" };

function PostReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "auth/SAVE_ACCESS_TOKEN": {
      return {
        ...state,
        post: accessToken
      };
    }

    default: {
      return state;
    }
  }
}
