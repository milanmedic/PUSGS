import {Sequelize, DataTypes} from 'sequelize'
import {sequelize} from '../services/utilities/database'

export const Flight = sequelize.define('Flight', {
    id: {
        type: DataTypes.UUIDV4,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    seats: {
        type: DataTypes.INTEGER,
        default: 0,
        allowNull: false
    },
    takenSeats: {
        type: DataTypes.INTEGER,
        default: 0,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE
    },
    updatedAt: {
      type: Sequelize.DATE
    }
})

//one flight has many tickets