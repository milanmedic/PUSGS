import {Sequelize, DataTypes} from 'sequelize'
import {sequelize} from '../services/utilities/database'

export const Friendship = sequelize.define('Friendship', {
    createdAt: {
        type: Sequelize.DATE
    },
    updatedAt: {
      type: Sequelize.DATE
    }
})

//one friendship has many users