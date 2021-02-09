export const updateUsers = user =>({
    type: "UPDATE_USERS_IN_ROOM",
    payload: user
});

export const addMessage = message => ({
    type: "UPDATE_MESSAGES",
    payload:message
});