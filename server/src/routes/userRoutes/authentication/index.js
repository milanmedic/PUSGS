import { Router } from 'express'
import { login, register } from '../../../controllers/authentication/index'
import {
    sendGitHubOAuthRequest,
    handleGitHubOAuthCallback,
} from '../../../controllers/oauth/index'

const router = Router()

router.post('/login', login)
router.post('/register', register)
router.get('/login/github', sendGitHubOAuthRequest)
router.get('/login/github/callback', handleGitHubOAuthCallback)

export default router
