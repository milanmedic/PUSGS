import { Sequelize } from 'sequelize'
import {DATABASE, DB_USERNAME, DB_PASS, DB_HOST} from '../../../config/dev'
const mysql = require('mysql2')

//try and setup a check if db exists
const connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USERNAME,
    password: DB_PASS
})

function checkIfDBExists(){
    return new Promise((reject, resolve) => {
        connection.connect((err) => { //error occurs here
            if(!err){
                connection.query(`SHOW DATABASES LIKE "${DATABASE}";`, (err, result) => {
                    if(!err){
                        if(result.length == 0){
                            connection.query(`CREATE DATABASE IF NOT EXISTS ${DATABASE};`, (err, result) => {
                                if(!err){
                                    console.log(`Success! ${DATABASE} successfully created!`)
                                    resolve(true)
                                } else {
                                    console.error(err)
                                    reject(false)
                                }
                            })
                        } else {
                            console.log(`${DATABASE} already exists!`)
                            resolve(true)
                        }
                    } else {
                        console.error(err)
                        reject(false)
                    }
                })
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
    console.log(connect)
    return instance
}

async function setup(){
    let check = await checkIfDBExists()
    connection.close()
    console.log(check)
    if(!check){
        try {
            throw new Error('There was an error while establishing connection to the database.')
        } catch(err) {
            process.exit(1)
        }
    } else {
        return connect()
    }
}

export default setup()