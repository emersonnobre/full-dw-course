// this fora de uma função aponta para o modulo
console.log(this === module.exports)

// this dentro de uma função aponta para o escopo global
function qualquer() {
    console.log(this === module.exports) //false
    console.log(this === global) //true
}

qualquer()