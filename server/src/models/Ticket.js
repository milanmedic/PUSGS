import {Sequelize, DataTypes} from 'sequelize'
import {sequelize} from '../services/utilities/database'

export const Ticket = sequelize.define('Ticket', {
    //foreign key1 = passenger username
    //foreign key2 = company id
    id: {
        type: DataTypes.UUIDV4,
        allowNull: false
    },
    destination: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE
    },
    updatedAt: {
      type: Sequelize.DATE
    },
})