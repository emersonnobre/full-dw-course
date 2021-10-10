// driblamos o cache pois retornamos uma factory function
module.exports = () => {
    return {
        valor: 0,
        inc() {
            this.valor++
        }
    }
}