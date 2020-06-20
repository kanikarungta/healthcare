export function loginDetails(rest) {
    return {
       type: 'LOGINDETAILS',
       ...rest
    }
}

export function logout() {
    return {
        type: 'LOGOUT'
    }
}