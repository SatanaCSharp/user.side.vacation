import { combineReducers }  from "redux";
import { user } from './user';
import { vacations } from './vacation';

const rootReducer = combineReducers({
    user,
    vacations
});

export default rootReducer;
