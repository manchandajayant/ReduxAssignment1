const initialState = { post: "", comments: [] };

function PostReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "POST_SET": {
      return {
        ...state,
        post: action.payload
      };
    }
    case "POST_COMMENTS": {
      return {
        ...state,
        comments: action.payload
      };
    }
    default: {
      return state;
    }
  }
}

/*

{
  type: "SET_POST_AND_COMMENTS",
  payload: {
    post: POST,
    comments: Comments[]
  }
}

*/

export default PostReducer;
