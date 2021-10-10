// demonstração de module.exports
const bomDia = 'Olá, bom dia!'

const boaNoite = (name = 'fulano') => {
  return `Olá, boa noite ${name}!`
}

module.exports = {
  bomDia,
  boaNoite
}
