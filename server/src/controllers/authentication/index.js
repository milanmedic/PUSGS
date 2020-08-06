import {
    validateEmail,
    validatePassword,
} from '../../services/utilities/validations'
import { checkIfExists, createUser, getUser } from '../../services/userService'
import { SECRET } from '../../config/dev'
import { EndpointError } from '../../models/Error'
import jwt from 'jsonwebtoken'
import {
    checkPassword,
    newToken,
} from '../../services/utilities/authentication'

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
    if (req.body.email && req.body.password) {
        //find a user with a corresponding email
        try {
            const user = await getUser(req.body.email)
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
            //create jwt token
            const token = newToken(req.body)
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
export const protect = async (req, res, next) => {}
