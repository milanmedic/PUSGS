import { FriendRequestDto } from '../../classes/FriendRequestDto'
import { FriendRequest } from '../../models/FriendRequest'

export function formatIncomingRequests(request) {
    return new FriendRequestDto(
        request.FriendRequest.dataValues.id,
        request.FriendRequest.dataValues.senderId,
        request.FriendRequest.dataValues.recipientId
    )
}

export async function deleteFriendRequest(requestId) {
    try {
        return await FriendRequest.destroy({
            where: {
                id: requestId,
            },
        })
    } catch (err) {
        throw new Error(err.message)
    }
}

export async function getFriendRequest(requestId) {
    try {
        return await FriendRequest.findByPk(requestId)
    } catch (err) {
        throw new Error(err.message)
    }
}
