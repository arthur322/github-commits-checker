import { combineReducers } from "redux";

import { reducer as users } from "./users";
import { reducer as commits } from './commits';

export default combineReducers({
  users,
  commits,
});
