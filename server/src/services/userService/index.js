import { User } from '../../models/User'
import { hashPassword } from '../utilities/authentication'

export async function checkIfExists(email) {
    let user = await User.findByPk(email)
    if (user) {
        return true
    }
    return false
}

export async function getUser(email) {
    return await User.findByPk(email)
}

export async function getUserById(id) {
    return await User.findOne({ where: { id: id } })
}

export async function getConfirmationStatus(email) {
    const user = await User.findByPk(email)
    return user.accountConfirmed
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
