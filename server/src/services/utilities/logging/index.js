import winston, { level } from 'winston'
const { format } = winston
const { combine, label, printf, timestamp, json } = format

const myFormat = printf(({ level, message, label, timestamp }) => {
    return `
    ----------------------------------------------------------
    [${timestamp}] [${label}] (${level.toUpperCase()}) : ${message}
    ----------------------------------------------------------
    `
})

winston.loggers.add('AuthController', {
    format: combine(
        label({ label: 'Authentication Controller' }),
        timestamp(),
        myFormat
    ),
    transports: [
        new winston.transports.Console({}),
        new winston.transports.File({ filename: 'authController.log' }),
    ],
})

winston.loggers.add('OAuthController', {
    format: combine(
        label({ label: 'OAuth Controller' }),
        timestamp(),
        myFormat
    ),
    transports: [
        new winston.transports.Console({}),
        new winston.transports.File({ filename: 'oauthController.log' }),
    ],
})

winston.loggers.add('UserController', {
    format: combine(label({ label: 'User Controller' }), timestamp(), myFormat),
    transports: [
        new winston.transports.Console({}),
        new winston.transports.File({ filename: 'userController.log' }),
    ],
})

winston.loggers.add('AdminController', {
    format: combine(
        label({ label: 'Admin Controller' }),
        timestamp(),
        myFormat
    ),
    transports: [
        new winston.transports.Console({}),
        new winston.transports.File({ filename: 'AdminController.log' }),
    ],
})

export default winston
