import {Sequelize, DataTypes} from 'sequelize'
import {sequelize} from '../services/utilities/database'

export const Destination = sequelize.define('Destination', {
    id: {
        type: DataTypes.UUIDV4,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE
    },
    updatedAt: {
      type: Sequelize.DATE
    }
})

//one destination has many flights
