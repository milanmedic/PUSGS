import { FriendRequestDto } from '../../classes/FriendRequestDto'

export function formatIncomingRequests(request) {
    return new FriendRequestDto(
        request.FriendRequest.dataValues.id,
        request.FriendRequest.dataValues.senderId,
        request.FriendRequest.dataValues.recipientId
    )
}
