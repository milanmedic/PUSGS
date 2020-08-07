import {
    validateEmail,
    validatePassword,
} from '../../services/utilities/validations'
import {
    checkIfExists,
    createUser,
    getUser,
    getConfirmationStatus,
} from '../../services/userService'
import { EndpointError } from '../../models/Error'
import {
    checkPassword,
    newToken,
    verifyToken,
} from '../../services/utilities/authentication'
import { sendMail } from '../../services/utilities/mailing'

export const register = async (req, res, next) => {
    //validate inputs
    try {
        if (
            validateEmail(req.body.email) &&
            validatePassword(req.body.password)
        ) {
            //check if user exists
            const exists = await checkIfExists(req.body.email)
            if (exists) {
                const error = new EndpointError('User Already Exists!', 400)
                return next(error)
            }
            //create user
            const user = await createUser(req.body)
            if (!user) {
                return next(
                    new EndpointError('Error while creating a user', 500)
                )
            }
            //send email to confirm account
            try {
                //no need to block the main loop to wait for this
                sendMail(user.email, user.id)
            } catch (err) {
                return next(
                    new EndpointError(
                        'There was an error while trying to send a confirmation email. Please try again',
                        500
                    )
                )
            }
            return res
                .status(201)
                .send({ message: 'User Registration Successfull' })
        } else {
            return next(new EndpointError('Email or Password Invalid', 400))
        }
    } catch (err) {
        next(err)
    }
}
export const login = async (req, res, next) => {
    let user = undefined
    if (req.body.email && req.body.password) {
        //find a user with a corresponding email
        try {
            user = await getUser(req.body.email)
            if (!user) {
                return next(
                    new EndpointError(
                        'A user with the corresponding email does not exist!',
                        404
                    )
                )
            }
            //check if passwords match
            const match = await checkPassword(req.body.password, user.password)
            if (!match) {
                return next(new EndpointError("Passwords don't match", 401))
            }
            const accountConfirmed = await getConfirmationStatus(user.email)
            if (!accountConfirmed) {
                return next(
                    new EndpointError(
                        'Please Confirm your account before logging in!',
                        400
                    )
                )
            }
            //create jwt token
            const token = newToken(user)
            if (!token) {
                return next(
                    new EndpointError('Error while creating access token!', 500)
                )
            }
            //return token
            return res.status(200).send({ token })
        } catch (err) {
            next(err)
        }
    } else {
        next(new EndpointError("Email &/or Password don't exist", 400))
    }
}

export const protectUser = (req, res, next) => {
    req.allowedRole = 'user'
    next()
}
// setting required role for
export const protectCompanyAdmin = (req, res, next) => {
    req.allowedRole = 'company'
    next()
}

export const protect = async (req, res, next) => {
    const bearer = req.headers.authorization
    if (!bearer || !bearer.startsWith('Bearer ')) {
        return next(new EndpointError('Bearer token missing!', 401))
    }

    const token = bearer.split('Bearer ')[1].trim()
    let payload = undefined
    try {
        payload = await verifyToken(token)
    } catch (err) {
        return next(err)
    }
    if (payload.role != req.allowedRole) {
        return next(new EndpointError('You are not authorized!', 401))
    }
    if (req.allowedRole == 'user') {
        const user = await getUser(payload.email)
        if (!user) {
            return next(
                new EndpointError("User with that email doesn't exist", 401)
            )
        }
        user.password = null
        req.user = user
    } else if (req.allowedRole == 'company') {
        const company = null
        if (!company) {
            return next(new EndpointError('Your credentials are invalid', 401))
        }
        req.user = company
    }
    next()
}
