import { combineReducers } from "redux";
import developersReducer from "./developerReducer";
import PostReducer from "./post/Reducer";

export default combineReducers({
  havingFun: havingFunReducer,
  developers: developersReducer,
  posts: PostReducer
});
function havingFunReducer(state = "yes", action) {
  switch (action.type) {
    case "SET_HAVING_FUN": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
