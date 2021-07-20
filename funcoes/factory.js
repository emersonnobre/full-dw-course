// Funções que criam um objeto
function criarPessoa(name, age) {
    return {
        name: name,
        age: age, 
        offer: '10%'
    }
}

console.log(criarPessoa('José', 12))