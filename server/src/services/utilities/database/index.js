import { Sequelize } from 'sequelize'
import {DATABASE, DB_USERNAME, DB_PASS, DB_HOST} from '../../../config/dev'

const connect = () =>{
    const instance = new Sequelize(DATABASE, DB_USERNAME, DB_PASS, {
        host: DB_HOST,
        dialect: "mysql",
    })
    return instance
}

export const sequelize = connect()