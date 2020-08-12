import { Router } from 'express'
import { confirmAccount } from '../../services/utilities/mailing/index'
import { protect, protectUser } from '../../controllers/authentication/index'
import { editProfile } from '../../controllers/user'

const router = Router()

router.get('/confirm/:id', confirmAccount)
router.put('/:id/edit-profile', protectUser, protect, editProfile)
router.get('/protected', protectUser, protect, (req, res) => {
    return res.send(req.user)
})

export default router
