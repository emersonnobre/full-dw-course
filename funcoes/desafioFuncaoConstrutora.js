function Pessoa(nome) {
    this.name = nome

    this.talk = () => {
        console.log(`My name is ${this.name}`)
    }
}

const p1 = new Pessoa('Carlinhos')
p1.talk()