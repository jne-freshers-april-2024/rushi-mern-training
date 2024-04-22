const {Sequelize} = require('sequelize');
require('dotenv').config()

const sequelize = new Sequelize(process.env.database,process.env.user,process.env.password,{
    dialect:process.env.dialect,
    logging:false,
    host:process.env.host
})

try{
    sequelize.authenticate();
    console.log("Connection has been established Successfully")
}
catch(err)
{
    console.log("Unable to Connect with Database:",err);
}

module.exports = sequelize;



