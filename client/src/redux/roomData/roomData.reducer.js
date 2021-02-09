const INITIAL_STATE={
    users:[],
    messgages:[],
}

const roomDataReducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case "UPDATE_USERS_IN_ROOM":
            return{
                ...state,
                users: action.payload
            }
        case "UPDATE_MESSAGES":
            return{
                ...state,
                messages:[...state.messages, action.payload]
            }
        default:
            return state;
    }
}

export default roomDataReducer;