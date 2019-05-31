import { combineReducers } from 'redux';

import todos from './itemsReducer';
import { authentication } from '../pages/AuthPage/authReducer';

const rootReducer = combineReducers({
  authentication,
  todos
});

export default rootReducer;