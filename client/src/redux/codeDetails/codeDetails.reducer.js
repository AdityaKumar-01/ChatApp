const INITIAL_STATE={
    theme:"Monokai",
    language:"Python",
}

const codeDetailsReducer = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case "SET_THEME" :
            return{
                ...state,
                theme:action.payload
            }
        case "SET_LANGUAGE":
            return{
                ...state,
                language:action.payload
            }
        default:
                return state;
    }
}

export default codeDetailsReducer;