// são funções que retornam promessas; Utilizada para processamentos assíncronos
// o valor retornado por uma promisse pode ser acessado pelo then

let promise = new Promise((resolve) => {
  resolve([ // o resolve aceita apenas um parâmetro
    {
      nome: "Carlos",
      dataNascimento: "2003-10-23"
    },
    {
      nome: "Ramon",
      dataNascimento: "2003-10-23"
    },
    {
      nome: "Arlinda",
      dataNascimento: "2003-10-23"
    }
  ])
})

/* Podemos sequenciar diversos then para construir uma lógica de tratamento em
   cima do dado adquirido*/

promise
  .then(resolve => resolve.map(resolve => resolve.nome))
  .then(arrayNomes => arrayNomes.map(nome => nome.toLowerCase()))
  .then(arrayNomesFiltrados => console.log(arrayNomesFiltrados))

let carsList = new Promise((resolve) => {
  resolve([
    { name: "Celta", price: 52304 },
    { name: "Civic", price: 80304 },
    { name: "Azera", price: 87304 },
    { name: "KA", price: 22304 },
  ])
})

const firstElement = array => array[0]
const getName = car => car.name
const looow = string => string.toLowerCase()

carsList
  .then(firstElement)
  .then(getName)
  .then(looow)
  .then(console.log)
  .catch(e => console.log(e))
