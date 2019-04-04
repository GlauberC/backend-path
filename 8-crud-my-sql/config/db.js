const sequelize = require('sequelize')

const seque = new sequelize('exemploEscola', 'glauberc', 'gla123', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    sequelize: sequelize,
    seque: seque
}