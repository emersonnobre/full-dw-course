// Já que os tipos também são funções, podemos adicionar novas funcionalidades aos prototypes da coisas
String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log('Emerson Gabriel Rocha Nobre'.reverse())