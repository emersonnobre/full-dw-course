// Comportamentos inacessíveis para strings normais.
const nome = 'Rebeca'
const frase = 'Olá ' + nome + '!'
console.log(frase)

const template = `
Olá
${nome}!
Isso é um template
respeita espaços, quebras     e tudo mais
`

const template2 = `
Este é outro template, ${nome}. A soma de 1 + 1 é ${1 + 1}!`

console.log(template, template2)

const up = texto => texto.toUpperCase() // Função que transforma o parâmetro em upper
console.log(`Ei... ${up('cuidado!')}`) // chamando funções dentro do template string

