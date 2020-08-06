// entry point
import express from 'express'
import { json, urlencoded } from 'body-parser'
import cors from 'cors'
import { PORT } from './config/dev'
import { setup } from './services/utilities/database'
import {
    login,
    register,
    protectUser,
    protect,
    protectCompanyAdmin,
} from './controllers/authentication'
import {
    sendGitHubOAuthRequest,
    handleGitHubOAuthCallback,
} from './controllers/oauth'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))

app.post('/login', login)
app.post('/register', register)

app.get('/', async (req, res) => {
    res.send('Hello World')
})

app.get('/login/github', sendGitHubOAuthRequest)
app.get('/login/github/callback', handleGitHubOAuthCallback)

app.get('/user-protected', protectUser, protect, (req, res) => {
    res.send(req.user)
})
app.get('/company-protected', protectCompanyAdmin, protect, (req, res) => {
    res.send(req.user)
})
app.use(function (err, req, res, next) {
    if (!err.statusCode) {
        res.status(500).send('Something broke!')
    }
    return res.status(err.statusCode).send(err.message)
})

app.use((req, res) => {
    console.log('route not handled')
    res.status(404).send('404 - not found')
})

export const start = () => {
    app.listen(PORT, async () => {
        try {
            console.log('Connection established successfully.')
            console.log(`Server listening on port ${PORT}`)
            await setup()
        } catch (err) {
            console.error('There was an error while establishing a connection.')
            process.exit(1)
        }
    })
}
