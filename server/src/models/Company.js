import { Sequelize, DataTypes } from 'sequelize'
import { sequelize } from '../services/utilities/database'
import { Destination } from './Destination'

export const Company = sequelize.define('Company', {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: true,
        default: 'company',
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rating: {
        type: DataTypes.FLOAT,
        allowNull: false,
        default: 0,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        default: '',
    },
    income: {
        type: DataTypes.INTEGER,
        allowNull: false,
        default: 0,
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
        default: 'company',
    },
})

//one company has many destinations
Company.hasMany(Destination, { foreignKey: 'companyId' })
