import { Sequelize } from 'sequelize'
import { DATABASE, DB_USERNAME, DB_PASS, DB_HOST } from '../../../config/dev'
import { checkConnection, checkIfDBExists, createDatabase } from './dbHelpers'

const connect = () => {
    const instance = new Sequelize(DATABASE, DB_USERNAME, DB_PASS, {
        host: DB_HOST,
        dialect: 'mysql',
        logging: false,
    })
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
