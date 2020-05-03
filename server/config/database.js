const Sequelize= require('sequelize');
require('dotenv').config({path: 'variables.env'});
//console.log(process.env.BD_HOST);
module.exports= new Sequelize(process.env.BD_NOMBRE,process.env.BD_USER,process.env.BD_PASS,{
    host:process.env.BD_HOST,
    port: process.env.BD_PORT,
    dialect: 'mysql',
    define: {
        timestamps:false
    },
    pool: {
        max:5,
        min:0,
        acquire: 30000,
        idle: 10000
    }
});

/*
codigo antes del deployment
module.exports= new Sequelize('agenciadeviajes','root','scrollk25',{
    host:'127.0.0.1',
    port: '3306',
    dialect: 'mysql',
    define: {
        timestamps:false
    },
    pool: {
        max:5,
        min:0,
        acquire: 30000,
        idle: 10000
    }
});
*/