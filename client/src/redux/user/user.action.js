export const setCurrentUser = user =>({
    type: "SET_CURRENT_USER",
    payload:user
});

export const setCurrentRoom = room =>({
    type:"SET_CURRENT_ROOM",
    payload:room
});