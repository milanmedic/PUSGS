export function validateEmail(email) {
    if (!email) {
        return false
    }
    if (email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
        return true
    }
    return false
}

export function validatePassword(password) {
    if (!password) {
        return false
    }
    if (
        password.match(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
        )
    ) {
        return true
    }
    return false
}
