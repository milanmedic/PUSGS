import { User } from '../../models/User'
import { UserDto } from '../../classes/UserDto'
import { hashPassword } from '../utilities/authentication'
import { Op } from 'sequelize'
import { formatIncomingRequests } from '../friendRequestService'

export async function userHasIncomingFriendRequest(user, requestId) {
    try {
        let requests = await getUsersIncomingFriendRequests(user)
        return requests.filter((request) => request.requestId == requestId)
    } catch (err) {
        throw new Error(err.message)
    }
}

export async function getUsersIncomingFriendRequests(user) {
    try {
        let requests = await user.getIncomingRequests()
        return requests.map((request) => formatIncomingRequests(request))
    } catch (err) {
        throw new Error(
            'There was an error while trying to get friend requests' +
                err.message
        )
    }
}

export async function sendNewFriendRequest(user1, user2) {
    try {
        return await user1.addSentRequest(user2)
    } catch (err) {
        throw new Error(
            'There was an error while trying to form an association' +
                err.message
        )
    }
}

export async function updateAllFields(
    id,
    { email, password, name, surname, username, location, description, age }
) {
    try {
        await updateById(id, 'email', email)
        await updateById(id, 'name', name)
        await updateById(id, 'surname', surname)
        await updateById(id, 'username', username)
        await updateById(id, 'location', location)
        await updateById(id, 'description', description)
        await updateById(id, 'age', age)
        await updatePassword(password, id)
        return await getUserById(id)
    } catch (err) {
        throw new Error('There was an error while updating the user.')
    }
}

export async function updatePassword(password, id) {
    try {
        const passwordHash = await hashPassword(password)
        await User.update(
            { password: passwordHash },
            {
                where: {
                    id: id,
                },
            }
        )
    } catch (err) {
        throw new Error(
            'There was an error while updating the password. ' + err.message
        )
    }
}

export async function checkIfExists(email) {
    let user = await User.findOne({ where: { email: email } })
    if (user) {
        return true
    }
    return false
}

export async function getUser(email) {
    return await User.findOne({ where: { email: email } })
}

export async function getUserById(id) {
    return await User.findOne({ where: { id: id } })
}

export async function getConfirmationStatus(email) {
    const user = await getUser(email)
    return user.accountConfirmed
}

export async function getUsersByUsername(username) {
    return await User.findAll({
        where: {
            username: { [Op.like]: `%${username}%` },
        },
    })
}

export function formatUser(user) {
    return new UserDto(user.id, user.username, user.email)
}

export async function updateById(id, field, value) {
    return await User.update(
        { [field]: value },
        {
            where: {
                id: id,
            },
        }
    )
}
// update with destructuring, pls
export async function createUser(data) {
    const found = await checkIfExists(data.email)
    if (!found) {
        try {
            const hash = await hashPassword(data.password)
            const user = await User.create({
                role: 'user',
                name: data.name,
                surname: data.surname,
                username: data.username,
                email: data.email,
                password: hash,
                location: data.location,
                age: data.age,
            })
            user.save()
            return {
                id: user.id,
                role: user.role,
                name: user.name,
                surname: user.surname,
                username: user.username,
                email: user.email,
                location: user.location,
                age: user.age,
            }
        } catch (err) {
            throw new Error('There was an error while creating a user')
        }
    } else {
        return null
    }
}
