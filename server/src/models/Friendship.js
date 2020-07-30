import {Sequelize, DataTypes} from 'sequelize'
import {sequelize} from '../services/utilities/database'

export const Friendship = sequelize.define('Friendship', {
    id: {
        type: DataTypes.UUIDV4,
        allowNull: false
    },
    firstFriendUsername: {
        type:DataTypes.STRING,
        allowNull: false,
    },
    secondFriendUsername: {
        type:DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: Sequelize.DATE
    },
    updatedAt: {
      type: Sequelize.DATE
    }
})

//one friendship has many users