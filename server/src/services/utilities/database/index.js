import { Sequelize } from 'sequelize'
import { checkConnection, checkIfDBExists, createDatabase } from './dbHelpers'

const connect = () => {
    const instance = new Sequelize(
        process.env.DATABASE,
        process.env.DB_USERNAME,
        process.env.DB_PASS,
        {
            host: process.env.DB_HOST,
            dialect: 'mysql',
            logging: false,
        }
    )
    return instance
}

export const sequelize = connect()

export async function setup() {
    try {
        if (await checkConnection()) {
            let flag = await checkIfDBExists()
            if (!flag) {
                await createDatabase()
            }
        }
        await sequelize.authenticate()
        await sequelize.sync({ force: true }) //if we want to work without migrations
    } catch (err) {
        console.error(err)
    }
}
