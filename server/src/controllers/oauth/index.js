import { GITHUB } from '../../config/dev'
import fetch from 'node-fetch'
import { checkIfExists } from '../../services/userService'
import { EndpointError } from '../../models/Error'
import { newToken } from '../../services/utilities/authentication'

async function getAccessToken(code, client_id, client_secret) {
    const request = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            client_id,
            client_secret,
            code,
        }),
    })
    const text = await request.text()
    //response is a text string containint keypairs with = and &, not JSON, that's why we use URLSearchParams to parse it
    const params = new URLSearchParams(text)
    return params.get('access_token')
}
async function fetchGitHubUser(token) {
    const request = await fetch('https://api.github.com/user', {
        headers: {
            Authorization: 'token ' + token,
        },
    })
    return await request.json()
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
