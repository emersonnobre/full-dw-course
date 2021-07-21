//É uma forma diferente de construir objetos, já que classes tb são funções
class Person {
    constructor(name, age, id) {
        this.name = name
        this.id = id
        this.age = age
    }
}

const person1 = new Person('Clara', 19, 1)
console.log(Object.values(person1))