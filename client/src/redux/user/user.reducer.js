const INITIAL_STATE={
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
            console.log(action.payload, "room name");
            return{
                ...state,
                currentRoom:action.payload
            }
        default:
            return state;
    }
}

export default userReducer;