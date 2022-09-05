//Response User Input Action
export const LoginStart = (user) => ({
    type: "LOGIN_START",
});
export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    playload: user,
});
export const LoginError = (error) => ({
    type: "LOGIN_ERROR",
    playload: error,
});