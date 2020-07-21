// entry point
import express from 'express'
import { json, urlencoded } from 'body-parser'
import cors from 'cors'
import {PORT} from './config/dev'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send({message: 'ok'})
})

export const start = () => {
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`)
    })
}

