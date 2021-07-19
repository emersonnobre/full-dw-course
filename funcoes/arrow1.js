// Funções arrow são sempre anônimas, se quiser chamar ela depois, deve guardá-la numa constante

let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // muito bom
console.log(dobro(Math.PI))

let ola = () => 'Olá'
console.log(ola())