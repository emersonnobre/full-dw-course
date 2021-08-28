class Person {
    constructor(name) {
        this.name = name
    }

    talk() {
        console.log(`Meu nome é ${this.name}`)
    }
}

const p1 = new Person('Bruna')
p1.talk()

const createPerson = name => {
    return {
        name,
        talk: () => console.log(`My name is ${name}`)
    }
}

const p2 = createPerson('Larissa')
p2.talk()
console.log(p2.name)