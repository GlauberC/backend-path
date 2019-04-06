const db = require('../config/db')

const Materia = db.seque.define('materia', {
    name:{
        type: db.sequelize.STRING
    },
  
})

module.exports = Materia