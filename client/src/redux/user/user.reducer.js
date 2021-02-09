const INITIAL_STATE={
    uniCode:null,
    currentUser:null,
    currentRoom:null
}

const userReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case "SET_CURRENT_USER":
            return{
                ...state,
                currentUser:action.payload
        }
        case "SET_CURRENT_ROOM":
            return{
                ...state,
                currentRoom:action.payload
            }
        case "SET_UNICODE":
            return{
                ...state,
                uniCode:action.payload
            }
        default:
            return state;
    }
}

export default userReducer;