var numero = 1
{
    var numero = 2 // como as var não respeitam escopo de bloco a não ser para funções, esta irá sobrescrever a outra
    console.log('dentro =', numero)
}

console.log('fora =', numero)