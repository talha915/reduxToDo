import {combineReducers} from 'redux';
import testReducer from './testReducer';
import toDo from './toDo';

const rootReducer = combineReducers({
   testReducer,
    toDo
});

export default rootReducer;