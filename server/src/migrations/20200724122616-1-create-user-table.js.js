'use strict'

const { DataTypes } = require('sequelize')

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Users', {
            name: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            surname: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            username: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
                primaryKey: true,
            },
            email: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            location: {
                type: Sequelize.DataTypes.STRING,
                allowNull: true,
            },
            age: {
                type: Sequelize.DataTypes.STRING,
                allowNull: true,
            },
            createdAt: {
                type: Sequelize.DataTypes.DATE,
            },
            updatedAt: {
                type: Sequelize.DataTypes.DATE,
            },
        })
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('User')
    },
}
