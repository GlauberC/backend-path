const express = require('express')
const router = express.Router()
const Materia = require('../model/materia')

router.get('/', (req,res) => {
    Materia.findAll().then(materia => {
        res.send(materia)
    })
})

router.post('/', (req,res) => {
    if(req.body.name === '' || !req.body.name){
        res.status(400).send('error')
    }else{
        Materia.create({
            name: req.body.name
        }).then(() => {
            res.send('test')
        })
    }

    
})
module.exports = router