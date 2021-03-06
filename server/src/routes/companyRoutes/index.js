//login
import { Router } from 'express'
import {
    protect,
    protectCompanyAdmin,
} from '../../controllers/authentication/index'

const router = Router()

router.get('/protected', protectCompanyAdmin, protect, (req, res) => {
    return res.send(req.user)
})

export default router
