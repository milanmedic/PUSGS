import { Sequelize, DataTypes } from 'sequelize'
import { sequelize } from '../services/utilities/database/index'
import { Ticket } from './Ticket'
import { Friendship } from './Friendship'

export const User = sequelize.define('User', {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    accountConfirmed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    createdAt: {
        type: Sequelize.DATE,
    },
    updatedAt: {
        type: Sequelize.DATE,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        default: 'user',
    },
})

//one user has many friendships
User.hasMany(Ticket, { foreignKey: 'userUsername' })
//one user has many tickets
User.belongsToMany(User, {
    as: 'Friends',
    through: Friendship,
    uniqueKey: 'custom_key',
})
