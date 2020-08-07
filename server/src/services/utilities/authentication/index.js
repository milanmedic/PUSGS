import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export async function hashPassword(password) {
    return await bcrypt.hash(password, 13)
}

export async function checkPassword(password, hash) {
    return await bcrypt.compare(password, hash)
}
//update for destructuring
export function newToken(user) {
    return jwt.sign(
        { email: user.email, role: user.role },
        process.env.SECRET,
        {
            expiresIn: process.env.JWTEXP,
        }
    )
}

export function verifyToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.SECRET, (err, payload) => {
            if (err) return reject(err)
            resolve(payload)
        })
    })
}
