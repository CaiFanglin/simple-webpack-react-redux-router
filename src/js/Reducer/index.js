import { combineReducers } from 'redux';
import change from './change.js';
import win from './win.js';
import list from './list.js';

export default combineReducers({
    change,
    win,
    list
});