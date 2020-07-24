// entry point
import express from 'express'
import { json, urlencoded } from 'body-parser'
import cors from 'cors'
import {PORT} from './config/dev'
import { sequelize } from './services/utilities/database/initDb'
import {login, register, protectRoute} from './controllers/authentication'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))

app.use('/login', login)
app.use('/signup', register)

app.get('/', async(req, res) => {
    res.send("Hello World")
})

export const start = () => {
    app.listen(PORT, async() => {
        try {
            await sequelize.authenticate()
            console.log('Connection established successfully.')
            console.log(`Server listening on port ${PORT}`)
        } catch(err) {
            console.error('There was an error while establishing a connection.')
            process.exit(1)
        }
    })
}

