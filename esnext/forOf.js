// percorre os valores

for(let letra of 'Coderr') {
    console.log(letra)
}

const assuntos = ['Map', 'Set', 'Promise']
for (let i in assuntos) { // atua nos indices, se quiser valor deve assuntos[i]
    console.log(i)
}

for (let assunto of assuntos) {
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }],
])

for (let [chave, valor] of assuntosMap.entries()) {
    console.log(chave, valor)
}