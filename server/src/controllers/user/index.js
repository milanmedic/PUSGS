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
    sendNewFriendRequest,
    getUsersIncomingFriendRequests,
} from '../../services/userService'
import { EndpointError } from '../../classes/Error'
import winston from '../../services/utilities/logging'
import { User } from '../../models/User'
import { FriendRequest } from '../../models/FriendRequest'

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

export async function sendFriendRequest(req, res, next) {
    let user1 = undefined,
        user2 = undefined
    try {
        user1 = await getUserById(req.params.id)
        user2 = await getUserById(req.body.id)
    } catch (err) {
        logger.error(
            'Something went wrong while searching for users in sendFriendRequest function'
        )
        return next(
            new EndpointError(
                'Someting went wrong while trying to identify the user',
                500
            )
        )
    }
    //check if both users exists
    if (!user1 && !user2) {
        logger.info("One of the users doesn't exist")
        return next(
            new EndpointError(
                "The user you want to send the request to doesn't exist",
                404
            )
        )
    }
    //if they do add a new request
    let confirmation = undefined
    try {
        confirmation = await sendNewFriendRequest(user1, user2)
    } catch (err) {
        logger.error(err.message)
        return next(new EndpointError(err.message, 500))
    }
    //if successfull return 200 ok
    if (!confirmation) {
        logger.info('There was an error while sending a request')
        return next(
            new EndpointError('There was an error while sending a request', 500)
        )
    }
    res.send('Friend Request Sent!')
}

export async function getIncomingFriendRequests(req, res, next) {
    let user = undefined
    try {
        user = await getUserById(req.params.id)
    } catch (err) {
        logger.error(
            'There was an error while searching for a user in getFriendRequests ' +
                err.message
        )
        return next(
            new EndpointError(
                'There was an error while fetching your incoming requests',
                500
            )
        )
    }
    if (!user) {
        logger.info("User doesn't exist in the database ")
        return next(
            new EndpointError("The user doesn't exist in the database", 404)
        )
    }
    let requests = []
    try {
        requests = await getUsersIncomingFriendRequests(user)
        //console.log(requests[0].FriendRequest)
    } catch (err) {}
    if (requests.length == 0) {
        return res.status(404).send('No incoming friend requests found.')
    }
    res.send(requests)
}
