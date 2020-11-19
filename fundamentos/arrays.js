const nomes = ['Fabiano', 'Math', 'Luíz', 'Eloá', 'Bruno']

if (nomes) {
    console.log(nomes.length)
    console.log(nomes.pop()) //retira o último valor do array
    delete nomes[2]
    nomes.push('Marcela')
    console.log(nomes)
} else {
    console.log('Inexistente')
}

