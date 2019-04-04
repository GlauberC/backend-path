const chai = require('chai')
const server = require('../index')
const chaiHttp = require('chai-http')
const materia = require('../model/materia')
const should = chai.should();

chai.use(chaiHttp)


describe('Materia', ()=>{

    it('Nova Materia', (done) =>{
        novaMateria = {
            name : 'ingles;'
        }
        chai.request(server)
            .post('/materia/')
            .send(novaMateria)
            .end((err, res)=>{
                res.should.have.status(200)
                done();
            })
    })

    it('Bad Request', (done) => {
        novaMateria = {
            name: ''
        }
        chai.request(server)
            .post('/materia/')
            .send(novaMateria)
            .end((err, res)=>{
                res.should.have.status(400)
                done();
            })
    })
    it('Listar materia', done => {
        chai.request(server)
            .get('/materia/')
            .end((err, res) => {
                res.should.have.status(200)
                done()
            })
    })
})