import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import roomDataReducer from './roomData/roomData.reducer';
import codeDetailsReducer from './codeDetails/codeDetails.reducer';


export default combineReducers({
    user:userReducer,
    roomData: roomDataReducer,
    codeDetails:codeDetailsReducer
});

