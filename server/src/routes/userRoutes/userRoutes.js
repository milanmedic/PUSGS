import {Router} from 'express'

const router = Router()

router.route('/:id')
    .get() //return all user info

router.route('/:id/edit')
    .put()


export default router