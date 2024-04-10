const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('sequelize','root','root',{dialect:'mysql',host:'localhost'})


exports.module = {sequelize,DataTypes};