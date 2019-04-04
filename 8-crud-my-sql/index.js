const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const materia = require('./controller/materiaController')
const {seque} = require('./config/db')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

seque.authenticate()
    .then(() => console.log('Banco de dados conectado'))
    .catch(err => console.log(err))

app.get('/', (req,res) => {
    res.send('ok')
})

app.use('/materia', materia)

app.listen(3000, () => {
    console.log('Rodando na porta 3000')
})
module.exports = app