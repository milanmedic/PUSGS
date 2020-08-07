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
    try {
        return jwt.sign(
            { email: user.email, role: user.role },
            process.env.SECRET,
            {
                expiresIn: process.env.JWTEXP,
            }
        )
    } catch (err) {
        throw new Error(err.message)
    }
}

export function verifyToken(token) {
    try {
        return new Promise((resolve, reject) => {
            jwt.verify(token, process.env.SECRET, (err, payload) => {
                if (err) return reject(err)
                resolve(payload)
            })
        })
    } catch (err) {
        throw new Error(err.message)
    }
}
