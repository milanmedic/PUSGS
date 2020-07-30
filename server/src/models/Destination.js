import { Sequelize, DataTypes } from 'sequelize'
import { sequelize } from '../services/utilities/database'
import { Flight } from './Flight'

export const Destination = sequelize.define('Destination', {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: Sequelize.DATE,
    },
    updatedAt: {
        type: Sequelize.DATE,
    },
})

//one destination has many flights
Destination.hasMany(Flight, { foreignKey: 'destinationId' })
