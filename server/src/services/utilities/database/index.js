import { Sequelize } from 'sequelize'
import {DATABASE, DB_USERNAME, DB_PASS, DB_HOST} from '../../../config/dev'
const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USERNAME,
    password: DB_PASS
})

async function checkConnection(){
    return new Promise((resolve, reject) => {
        connection.connect((err) => {
            if(err){
                console.error('There was an error while establishing connection.')
                reject(false)
            } else {
                resolve(true)
            }
        })
    })
}

async function checkIfDBExists(){
    return new Promise((resolve, reject) => {
        connection.query(`SHOW DATABASES LIKE "${DATABASE}";`, (err, result) => {
            if(err){
                console.error('There was an error while running the SHOW DATABASES command.')
                reject(false)
            } else {
                if(result.length != 0){
                    console.log(`${DATABASE} already exists!`)
                    resolve(true)
                } else {
                    resolve(false)
                }
            }
        })
    })
}

async function createDatabase(){
    return new Promise((resolve, reject) => {
        connection.query(`CREATE DATABASE IF NOT EXISTS ${DATABASE};`, (err, result) => {
            if(!err){
                console.log(`Success! ${DATABASE} successfully created!`)
                resolve(true)
            } else {
                console.error(err)
                reject(false)
            }
        })
    })
}

const connect = () =>{
    const instance = new Sequelize(DATABASE, DB_USERNAME, DB_PASS, {
        host: DB_HOST,
        dialect: "mysql",
    })
    return instance
}

export async function setup(){
    try {
        if(await checkConnection()){
            let flag = await checkIfDBExists()
            if(!flag){
                await createDatabase()
                return connect()
            } else {
                return connect()
            }
        }
    } catch(err) {
        console.error(err)
    }
}
