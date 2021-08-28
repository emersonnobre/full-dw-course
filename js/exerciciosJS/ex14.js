const fruta = (fruta) => {
    switch(fruta){
        case 'Maçã':
            console.log('Não vendemos')
            break
        case 'Kiwi':
            console.log('Estamos com escassez de kiwi')
            break
        case 'Melancia':
            console.log('Aqui está, são 3 reais o quilo')
            break
        default:
            console.log('erro')
    }   
}

fruta('Melancia')
fruta('Maçã')
fruta('Kiwi')
fruta('qa')
fruta()