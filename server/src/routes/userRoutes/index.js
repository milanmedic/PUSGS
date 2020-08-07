import { Router } from 'express'
import { confirmAccount } from '../../services/utilities/mailing/index'
import { protect, protectUser } from '../../controllers/authentication/index'

const router = Router()

router.get('/confirm/:id', confirmAccount)
router.get('/protected', protectUser, protect, (req, res) => {
    return res.send(req.user)
})

export default router
