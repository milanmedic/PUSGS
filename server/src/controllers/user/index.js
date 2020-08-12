//user controller
import {
    validateEmail,
    validatePassword,
} from '../../services/utilities/validations'
import { getUserById, updateAllFields } from '../../services/userService'
import { EndpointError } from '../../models/Error'
import winston from '../../services/utilities/logging'

const logger = winston.loggers.get('UserController')

export async function editProfile(req, res, next) {
    //check if userId exists in the DB
    const exists = await getUserById(req.params.id)
    if (!exists) {
        logger.info("User with the requested id doesn't exits")
        return next(
            new EndpointError("The user doesn't exist in the database", 404)
        )
    }
    //check if mail/pass are valid
    if (!validateEmail(req.body.email)) {
        logger.info('Email is not correctly formatted')
        return next(
            new EndpointError("The email isn't correctly formatted", 400)
        )
    }

    if (!validatePassword(req.body.password)) {
        logger.info("The password isn't correctly formatted")
        return next(
            new EndpointError(
                'Password needs to contain numbers, special characters and letters!',
                400
            )
        )
    }
    //more additional validations
    //if exists then update entity
    let user = undefined
    try {
        user = await updateAllFields(req.params.id, req.body)
    } catch (err) {
        logger.error('An error occured while updating the user')
        return next(new EndpointError(err.message, 500))
    }
    //return updated data
    res.json({ user })
}
