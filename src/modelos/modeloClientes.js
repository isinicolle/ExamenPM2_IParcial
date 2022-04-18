const sequelize = require('sequelize');
const db = require('../configuraciones/db');

const Cliente = db.define(
    "cliente",
    {
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        rtn: {
            type: sequelize.STRING(20),
            allowNull: true,
        },
        nombre : {
            type: sequelize.STRING(45),
            allowNull: false,
        },
        apellido : {
            type: sequelize.STRING(45),
            allowNull: false,
        },
        estado : {
            type: sequelize.TINYINT(1),
            allowNull: true,
            defaultValue: 1,
        }
    },
    {
        tableName: "clientes",
        timestamps: false,
    }
);

module.exports = Cliente;