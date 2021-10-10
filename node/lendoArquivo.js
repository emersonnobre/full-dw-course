const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//sincrono 
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrono
fs.readFile(caminho, 'utf-8', (error, conteudo) => {
    if(error) console.log(error)
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// lendo a pasta
fs.readdir(__dirname, (err, arquivos) => {
    console.log(`
    Arquivos da pasta: \n
    ${arquivos} \n
    `)
})