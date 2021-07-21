// não tem private em js
const obj = {
    _valor: 1, // convenção
    get valor() {return this._valor},
    set valor(valor) {this._valor = valor}
}