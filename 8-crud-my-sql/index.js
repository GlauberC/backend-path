const express = require('express')
const app = express()
const professor = require('./controller/professorController')
const {seque} = require('./config/db')

seque.authenticate()
    .then(() => console.log('Banco de dados conectado'))
    .catch(err => console.log(err))

app.get('/', (req,res) => {
    res.send('ok')
})

app.use('/professor', professor)

app.listen(3000, () => {
    console.log('Rodando na porta 3000')
})