const escola = "Ifzinho"

console.log(escola.charAt(4)) //retorna o valor presente no índice 4
console.log(escola.indexOf('o')) //retorna o índice onde se encontra o valor 'o'

console.log(escola.substring(4)) //retira os valores anteriores do índice passado
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat('!')) //concatenação
console.log(escola.replace('i', '1')) //troca os is por 1s

console.log('Ana,Maria,Pedro'.split(',')) //transforma o array
