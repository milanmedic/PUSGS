import { signup, signin, protect } from '../../services/utilities/authentication/authService'

export const login = (req, res) => {
    console.log('Login Route')
    return res.send('End')
}

export const register = (req, res) => {
    console.log('Register Route')
    return res.send('End')
}

export const protectRoute = (req, res) => {
    return res.status(401).end()
}