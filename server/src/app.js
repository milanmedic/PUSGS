// entry point
import express from 'express'
import { json, urlencoded } from 'body-parser'
import cors from 'cors'
import {PORT} from './config/dev'
import { setup, sequelize } from './services/utilities/database'
import {login, register, protectRoute} from './controllers/authentication'
import {User} from './models/User'
import {Flight} from './models/Flight'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))

app.use('/login', login)
app.use('/signup', register)

app.get('/', async(req, res) => {
    res.send("Hello World")
    let user = await User.create({
        name: 'Joe',
        surname: 'Doe',
        username: 'joe',
        email: 'joe@gmail.com',
        password: 'kurac'
    })
    let flight = await Flight.create({
        name: 'Kurac',
        seats: 10,
        takenSeats: 0
    })
})

export const start = () => {
    app.listen(PORT, async() => {
        try {
            console.log('Connection established successfully.')
            console.log(`Server listening on port ${PORT}`)
            await setup()
        } catch(err) {
            console.error('There was an error while establishing a connection.')
            process.exit(1)
        }
    })
}

