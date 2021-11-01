const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj)) // 1 array com os valores
console.log(Object.keys(obj)) // 1 array com as chaves

// notação literal
const nome = 'Robertinho'
const pessoa = {
    nome, // não precisa ser nome: nome
    ola() {
        return `Oie, meu nome é ${this.nome}`
    }  
}

console.log(pessoa.ola())

// class
class Animal {
    comer() {
        console.log('tô comendo')
    }
}

class Cachorro extends Animal { // herança
    latir() {
        console.log('au aua ua')
    }
}

const cachorrinho = new Cachorro
cachorrinho.comer()
cachorrinho.latir()