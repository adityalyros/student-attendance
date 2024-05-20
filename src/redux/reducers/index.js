import { combineReducers } from 'redux';
import authReducer from './authReducer';
import attendanceReducer from './attendanceReducer';
import userReducer from './userReducer';

export default combineReducers({
    auth: authReducer,
    attendance: attendanceReducer,
    user: userReducer,
});
