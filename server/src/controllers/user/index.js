//user controller
import {
    validateEmail,
    validatePassword,
} from '../../services/utilities/validations'
import {
    getUserById,
    updateAllFields,
    getUsersByUsername,
    formatUser,
} from '../../services/userService'
import { EndpointError } from '../../classes/Error'
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

export async function findFriends(req, res, next) {
    //get username from query, need to format the query because it returns the query params with included double quotes, like this "someUsername"
    const username = req.query.username.replace(/['"]+/g, '')
    if (!username) {
        logger.info('Query parameter missing in find friends function!')
        return next(new EndpointError('Query parameter missing!', 400))
    }
    //find all users that have that username or similar
    let users = undefined
    try {
        users = await getUsersByUsername(username)
    } catch (err) {
        logger.error('Error while querying users in findFriends controller!')
        return next(
            new EndpointError(
                'An error occured while searching for friends!',
                500
            )
        )
    }
    try {
        users = users.map((user) => formatUser(user))
        users = users.filter((item) => item.id != req.params.id)
    } catch (err) {
        logger.error(
            'There was an error in findFriends function while filtering data to return!'
        )
        return next(
            new EndpointError(
                'There was an error while searching for users',
                500
            )
        )
    }
    if (users.length == 0) {
        return res.status(404).send('No users with the corresponding username')
    }
    res.json({ users })
    //return a list of users
}
