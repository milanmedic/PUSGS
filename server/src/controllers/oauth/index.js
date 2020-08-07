import { checkIfExists } from '../../services/userService'
import { EndpointError } from '../../models/Error'
import { newToken } from '../../services/utilities/authentication'
import { getConfirmationStatus } from '../../services/userService'
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
    const redirectURI = res.redirect(
        `https://github.com/login/oauth/authorize?client_id=${process.env.OAUTH_GITHUB_CLIENT_ID}&redirect_uri=${process.env.OAUTH_GITHUB_REDIRECTION_URI}`
    )
}

export async function handleGitHubOAuthCallback(req, res, next) {
    const code = req.query.code
    const accessToken = await getAccessToken(
        code,
        process.env.OAUTH_GITHUB_CLIENT_ID,
        process.env.OAUTH_GITUB_CLIENT_SECRET
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
    const accountConfirmed = await getConfirmationStatus(user.email)
    if (!accountConfirmed) {
        return next(
            new EndpointError(
                'Please Confirm your account before logging in!',
                400
            )
        )
    }
    //create jwt token for access
    const jwtToken = await newToken({ email: user.email, role: 'user' })
    //return token to user
    res.json({ jwtToken })
}
