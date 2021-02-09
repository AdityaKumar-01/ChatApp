import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import roomDataReducer from './roomData/roomData.reducer';


export default combineReducers({
    user:userReducer,
    roomData: roomDataReducer
});

