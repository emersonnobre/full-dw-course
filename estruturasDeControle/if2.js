function teste1(num)
{
    if(num > 7)
        console.log(num)
}

// teste1(6)
// teste1(9)

Number.prototype.entre = function (init, end) {
    return this >= init && this <= end
}

const impResultado = function(nota) {
    if(nota.entre(7, 10)) {
        console.log('Aprovado')
    } else if(nota.entre(1, 6)) {
        console.log('Reprovado')
    } else {
        console.log('Não listado')
    }
}

impResultado(9)
impResultado(3)
impResultado(17)
