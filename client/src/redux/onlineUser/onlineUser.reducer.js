const INITIAL_STATE={
    room:null,
    userList:[]
}

const onlineUserReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case "UPDATE_USER":
            return{
                ...state,
                userList:[action.payload]
            }
        case "UPDATE_ROOM":
            return{
                ...state,
                room:action.payload
            }
            default:
                return state;
                
    }
}

export default onlineUserReducer;