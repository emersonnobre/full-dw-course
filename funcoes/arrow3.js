// this de uma função declarada solta aponta para o global
let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj) // agora aponta para o objeto
comparaComThis(global)
comparaComThis(obj)

// this em uma função arrow aponta para o módulo, e não para o global
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

