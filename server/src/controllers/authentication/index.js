import {
    validateEmail,
    validatePassword,
} from '../../services/utilities/validations'
import { checkIfExists, createUser } from '../../services/userService'
import passport from 'passport'
import { Strategy as localStrategy } from 'passport-local'

// Passport middleware for handling user registration
passport.use(
    'signup',
    new localStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true,
        },
        async (req, email, password, done) => {
            let user = {}
            try {
                if (validateEmail(email) && validatePassword(password)) {
                    const exists = await checkIfExists(req.body.username)
                    if (!exists) {
                        user = await createUser(req.body)
                    } else {
                        throw new Error('User already exists')
                    }
                } else {
                    throw new Error('Credentials validation error')
                }
                return done(null, user)
            } catch (err) {
                done(err)
            }
        }
    )
)

export const register = async (req, res, next) => {
    return res.json({
        message: 'Signup successful',
        user: req.user,
    })
}
