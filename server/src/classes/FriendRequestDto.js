export class FriendRequestDto {
    constructor(requestId, senderId, recipientId) {
        this.requestId = requestId
        this.senderId = senderId
        this.recipientId = recipientId
    }
}
