const getUserData =  () => {
    return {
        userId: localStorage.getItem("userId"),
        token: localStorage.getItem("token")
    }
}
const setUserData = (_id, token) => {
    localStorage.setItem("userId", _id);
    localStorage.setItem("token", `Bearer ${token}`);
}
const clearUserData = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
}
const setSignInData = (email, password) => {
    localStorage.setItem("signInEmail", email);
    localStorage.setItem("signInPassword", password);
}
const clearSignInData = () => {
    localStorage.removeItem("signInEmail");
    localStorage.removeItem("signInPassword");
}


export {
    getUserData,
    setUserData,
    clearUserData,
    setSignInData,
    clearSignInData
}