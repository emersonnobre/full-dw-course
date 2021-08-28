console.log(Math.ceil(6.1))

function Obj(name) {
    this.name = name
}

const obj1 = new Obj('emerson') // declaramos um objeto da função Obj já settando o name
console.log(obj1.name)

function pessoa(name, age) {
    this.name = name
    this.age = age

    this.startConversation = () => console.log(`Hi, my name is ${this.name}`)
    this.informeAge = () => console.log(`I am ${this.age} old`)
}

let pes1 = new pessoa('carl', 19)
let pes2 = new pessoa('lara', 22)

pes1.startConversation()
pes1.informeAge()
pes2.startConversation()
pes2.informeAge()