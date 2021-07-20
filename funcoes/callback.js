// quando uma função chama outra por conta de um evento
const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(name, index) {
    console.log(`${index + 1}. ${name}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante)) // toda vez que encontra um indice, dispara a função arrow
