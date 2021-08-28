// extrai elementos de arrays, objs

const ana = {
    name:  'ana',
    age: 12,
    likeMusic: false
}

const { name, likeMusic } = ana // extraímos do objeto ana as variáveis name e likeMusic
console.log(likeMusic)

// para armazenarmos os dados em var com nomes especificados
const { name: n, likeMusic: verify } = ana
console.log(verify)

//podemos settar um valor pré definido caso não venha nenhum valor do objeto consultado
const { name: n2, likeMusic: veirfy2, likeCandy = true} = ana
console.log(likeCandy)

