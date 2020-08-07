// entry point
import express from 'express'
import { json, urlencoded } from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import { setup } from './services/utilities/database'
import userAuthenticationRoutes from './routes/userRoutes/authentication'
import userRoutes from './routes/userRoutes/index'
import companyRoutes from './routes/companyRoutes/index'

export const app = express()
dotenv.config()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))

app.use('/', userAuthenticationRoutes)
app.use('/user', userRoutes)
app.use('/company', companyRoutes)

app.get('/', async (req, res) => {
    res.send('Hello World')
})

app.use(function (err, req, res, next) {
    if (!err.statusCode) {
        return res.status(500).send('Something broke!')
    }
    return res.status(err.statusCode).send(err.message)
})

app.use((req, res) => {
    console.log('route not handled')
    res.status(404).send('404 - not found')
})

export const start = () => {
    app.listen(process.env.PORT, async () => {
        try {
            console.log('Connection established successfully.')
            console.log(`Server listening on port ${process.env.PORT}`)
            await setup()
        } catch (err) {
            console.error('There was an error while establishing a connection.')
            process.exit(1)
        }
    })
}
