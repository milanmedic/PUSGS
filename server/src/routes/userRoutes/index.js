import { Router } from 'express'
import { confirmAccount } from '../../services/utilities/mailing/index'
import { protect, protectUser } from '../../controllers/authentication/index'
import {
    editProfile,
    findFriends,
    sendFriendRequest,
    getIncomingFriendRequests,
    declineFriendRequest,
    acceptFriendRequest,
    deleteFriend,
} from '../../controllers/user'

const router = Router()

router.get('/confirm/:id', confirmAccount)
router.put('/:id/edit-profile', protectUser, protect, editProfile)
//user/userId/find-friends/?username=someUsername
router.get('/:id/find-friends', protectUser, protect, findFriends)
router.post('/:id/send-friend-request', protectUser, protect, sendFriendRequest)
router.get(
    '/:id/get-incoming-friend-requests',
    protectUser,
    protect,
    getIncomingFriendRequests
)
router.delete(
    '/:id/decline-request/:requestId',
    protectUser,
    protect,
    declineFriendRequest
)
router.post(
    '/:id/accept-request/:requestId',
    protectUser,
    protect,
    acceptFriendRequest
)
router.delete(
    '/:id/delete-friend/:friendId',
    protectUser,
    protect,
    deleteFriend
)
router.get('/protected', protectUser, protect, (req, res) => {
    return res.send(req.user)
})

export default router
