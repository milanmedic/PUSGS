import mysql from 'mysql2'

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASS,
})

export async function checkConnection() {
    return new Promise((resolve, reject) => {
        connection.connect((err) => {
            if (err) {
                console.error(
                    'There was an error while establishing connection.'
                )
                reject(false)
            } else {
                resolve(true)
            }
        })
    })
}

export async function checkIfDBExists() {
    return new Promise((resolve, reject) => {
        connection.query(
            `SHOW DATABASES LIKE "${process.env.DATABASE}";`,
            (err, result) => {
                if (err) {
                    console.error(
                        'There was an error while running the SHOW DATABASES command.'
                    )
                    reject(false)
                } else {
                    if (result.length != 0) {
                        console.log(`${process.env.DATABASE} already exists!`)
                        resolve(true)
                    } else {
                        resolve(false)
                    }
                }
            }
        )
    })
}

export async function createDatabase() {
    return new Promise((resolve, reject) => {
        connection.query(
            `CREATE DATABASE IF NOT EXISTS ${process.env.DATABASE};`,
            (err, result) => {
                if (!err) {
                    console.log(
                        `Success! ${process.env.DATABASE} successfully created!`
                    )
                    resolve(true)
                } else {
                    console.error(err)
                    reject(false)
                }
            }
        )
    })
}
