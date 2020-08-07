import { GITHUB } from '../../config/dev'
import { checkIfExists } from '../../services/userService'
import { EndpointError } from '../../models/Error'
import { newToken } from '../../services/utilities/authentication'
import axios from 'axios'

async function getAccessToken(code, client_id, client_secret) {
    try {
        const request = await axios.post(
            'https://github.com/login/oauth/access_token',
            {
                client_id,
                client_secret,
                code,
            }
        )
        const params = new URLSearchParams(request.data)
        return params.get('access_token')
    } catch (err) {
        console.error(err)
    }
}
async function fetchGitHubUser(token) {
    try {
        const request = await axios.get('https://api.github.com/user', {
            headers: {
                Authorization: 'token ' + token,
            },
        })
        return request.data
    } catch (err) {
        console.error(err)
    }
}
export async function sendGitHubOAuthRequest(req, res) {
    const redirectURI = 'http://localhost:3000/login/github/callback'
    res.redirect(
        `https://github.com/login/oauth/authorize?client_id=${GITHUB.CLIENT_ID}&redirect_uri=${redirectURI}`
    )
}

export async function handleGitHubOAuthCallback(req, res, next) {
    const code = req.query.code
    const accessToken = await getAccessToken(
        code,
        GITHUB.CLIENT_ID,
        GITHUB.CLIENT_SECRET
    )
    //get user
    const user = await fetchGitHubUser(accessToken)

    //check if user exists
    const exists = await checkIfExists(user.email)
    if (!exists) {
        return next(
            new EndpointError(
                "A user with the corresponding email doesn't exist!",
                401
            )
        )
    }
    //create jwt token for access
    const jwtToken = await newToken({ email: user.email, role: 'user' })
    //return token to user
    res.json({ jwtToken })
}
