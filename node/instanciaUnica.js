// o node faz cache dos objetos. Quando retornamos o mesmo objeto
// em diferentes variaveis, elas apontam para o mesmo objeto
module.exports = {
    valor: 0,
    inc() {
        this.valor++
    }
}