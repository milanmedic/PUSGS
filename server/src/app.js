// entry point
import express from 'express'
import { json, urlencoded } from 'body-parser'
import cors from 'cors'
import { PORT } from './config/dev'
import { setup } from './services/utilities/database'
import { login, register } from './controllers/authentication'
import passport from 'passport'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(passport.initialize())

//app.use('/login', login)
app.post(
    '/register',
    passport.authenticate('signup', { failureRedirect: '/', session: false }),
    register
)

app.use('/register', (err, req, res, next) => {
    console.log(err.stack)
    return res.status(400).send(err.message)
})

app.get('/', async (req, res) => {
    res.send('Hello World')
})

app.use(function (err, req, res, next) {
    res.status(500).send('Something broke!')
    process.exit(1)
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
