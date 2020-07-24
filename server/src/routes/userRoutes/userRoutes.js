import {Router} from 'express'

const router = Router()

router.route('/:id')
    .get() //return all user info

router.route('/:id/edit')
    .put() //edit user info

//find friends
//add friend
//remove friend
//reserce/cancel airline ticket
//rate airline ticket
//rate airline

export default router