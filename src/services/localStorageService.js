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
export {
    getUserData,
    setUserData
}