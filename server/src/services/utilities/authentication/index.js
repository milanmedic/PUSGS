import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { SECRET, JWTEXP } from '../../../config/dev'

export async function hashPassword(password) {
    return await bcrypt.hash(password, 13)
}

export async function checkPassword(password, hash) {
    return await bcrypt.compare(password, hash)
}
//update for destructuring
export function newToken(user) {
    return jwt.sign({ email: user.email, role: user.role }, SECRET, {
        expiresIn: JWTEXP,
    })
}

export function verifyToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, SECRET, (err, payload) => {
            if (err) return reject(err)
            resolve(payload)
        })
    })
}
