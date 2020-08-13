import { Sequelize, DataTypes } from 'sequelize'
import { sequelize } from '../services/utilities/database'

export const FriendRequest = sequelize.define('FriendRequest', {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    createdAt: {
        type: Sequelize.DATE,
    },
    updatedAt: {
        type: Sequelize.DATE,
    },
})

//one friendship has many users
