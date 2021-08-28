// JSON é um aqruvio de texto amplamente utilizado por sua interoperabilidade entre sistemas diferentes.
// Podemos exportar dados, estruturas e até armazenar configurações

const ob = { name: 'Ramão' }
console.log(JSON.stringify(ob)) //transformando para JSON
console.log(JSON.parse('{ "name": "Rebeca" }')) //transformando para OBJETO
