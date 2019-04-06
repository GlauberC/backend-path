// Alterar package json em test

// Importar o chai
const chai = require('chai')
// importar expect
const expect = chai.expect

// Definir função

const somarNumeros = (a, b) => {
    if(typeof a === 'number' && typeof b === 'number'){
        return a + b
    }else{
        return undefined
    }

}
const subtrairNumeros = (a, b) => {
    if(typeof(a) === 'number' && typeof(b) === 'number'){
        return a-b
    }else{
        return undefined
    }
}

// describe
    //it done 
        // expect be equal
        // done





// Verificações simples
describe('Somas', () =>{
    it('Somar com positivos => 2 e 3 = 5', done => {
        const resultado = somarNumeros(2,3)
        expect(resultado).be.equal(5)
        done()
    })
    it('Teste de tipo => 4 + "3" = underfined', done => {
        expect(somarNumeros(4, '3')).be.equal(undefined)
        done()
    })


})

describe('Subtrições', () =>{
    it('Subtrair maior pelo menor => 4-1=3', done =>{
        expect(subtrairNumeros(4,1 )).be.equal(3)
        done()
    })
    it('Teste de tipos => "4" - 2 = underfined ', done => {
        expect(subtrairNumeros("4", 2)).be.equal(undefined)
        done()
    })
})






