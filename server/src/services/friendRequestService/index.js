import { FriendRequestDto } from '../../classes/FriendRequestDto'

export function formatIncomingRequests(request) {
    return new FriendRequestDto(
        request.FriendRequest.dataValues.id,
        request.FriendRequest.dataValues.user1Id,
        request.FriendRequest.dataValues.user2Id
    )
}
