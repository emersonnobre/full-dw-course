/*
É um objeto que trabalha com índices, e não com chave-valor
Estrutura dinâmica
Estrutura heterogênea
*/

let array1 = new Array() //instância
array1 = [] //literal
array1.push('Emerson')
array1.push('Emerson')
array1.push('Emerson')
array1.push('Emerson')
array1.sort() //ordena
delete array1[0] //setta para undefined
console.log(array1)
array1.splice(1, 1, 'Danillo') //a partir do indice 1, exclui 1 item e add os itens passados
console.log(array1)