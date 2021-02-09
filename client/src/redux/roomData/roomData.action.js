export const updateUsers = users =>({
    type: "UPDATE_USERS_IN_ROOM",
    payload: users
});

export const addMessage = message => ({
    type: "UPDATE_MESSAGES",
    payload:message
});