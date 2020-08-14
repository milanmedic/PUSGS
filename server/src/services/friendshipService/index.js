import { Friendship } from '../../models/Friendship'
import { Op } from 'sequelize'

export async function addFriend(user1, user2) {
    try {
        return await user1.addFriend(user2)
    } catch (err) {
        throw new Error(
            'There was an error while trying to form an association ' +
                err.message
        )
    }
}

export async function getFriendship(user1Id, user2Id) {
    try {
        return await Friendship.findOne({
            where: {
                [Op.or]: [
                    { userId: user1Id, friendId: user2Id },
                    { userId: user2Id, friendId: user1Id },
                ],
            },
        })
    } catch (err) {
        throw new Error(err.message)
    }
}

export async function deleteFriendship(id) {
    try {
        return await Friendship.destroy({
            where: {
                id: id,
            },
        })
    } catch (err) {
        throw new Error(err.message)
    }
}
