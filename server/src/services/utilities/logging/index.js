import winston, { level } from 'winston'
const { format } = winston
const { combine, label, printf, timestamp, json } = format

const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level.toUpperCase()}: ${message}`
})

winston.loggers.add('authController', {
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

export default winston
