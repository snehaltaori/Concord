export const isLoggedIn = () => {
    return localStorage.getItem("jwtToken") ? true : false
}

export const getToken = () => {
    if(isLoggedIn())
        return localStorage.getItem("jwtToken");
    else
        return null;
}
