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
