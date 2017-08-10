import { combineReducers } from 'redux';
import customer from './customer';
import { stack, drawer } from './navigation';

const rootReducer = combineReducers({
    stack,
    drawer
});

export default rootReducer;