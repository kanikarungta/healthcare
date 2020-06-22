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

export function savePatientDetails(data) {
    return {
        type: 'SAVEPATIENTDETAILS',
        data: data
    }
}