// simulando o new que usamos para instanciar

function Aula(name, id) {
    this.name = name
    this.id = id
}

function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aulinha = novo(Aula, 'Aula 01', 12)
console.log(aulinha)