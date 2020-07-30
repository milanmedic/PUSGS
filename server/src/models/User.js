import {Sequelize, DataTypes} from 'sequelize'
import {sequelize} from '../services/utilities/database/index'
import {Ticket} from './Ticket'
import { Friendship } from './Friendship'

export const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: true
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    createdAt: {
        type: Sequelize.DATE
    },
    updatedAt: {
      type: Sequelize.DATE
    },
})

//one user has many friendships
//one user has many tickets
User.hasMany(Ticket, {foreignKey: 'userUsername'})
User.belongsToMany(User, {as: 'Friends', through: Friendship, uniqueKey: 'custom_key'})