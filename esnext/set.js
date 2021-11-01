// conjunto não indexado e não aceita repetição
const times = new Set()
times.add('Vasco')
times.add('Grêmio').add('Palmeiras').add('Cruzeiro').add('Chapecoense').add('Fluminense')

console.log(times.size)
console.log(times.has('Palmeirass'))
times.delete('Chapecoense')
console.log(times.has('Chapecoense'))

const nomesArray = ['Lucas', 'Carol', 'Daiane']
const nomesSet = new Set(nomesArray)
console.log(nomesSet)