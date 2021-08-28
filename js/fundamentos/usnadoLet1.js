// o let respeita bastante os escopos de blocos
var numero = 1
{
    let numero = 2
    console.log('dentro =', numero) // sempre busca primeiro no seu escopo
}

console.log('fora =', numero)