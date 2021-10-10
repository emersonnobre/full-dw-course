// não precisamos usar o caminho relativo ./ no require
const lodash = require('lodash')
const http = require('http')

// setInterval(() => {
//     console.log(lodash.random(1, 10))
// }, 500)
http.createServer((req, res) => {
    res.write('Olá do http')
    res.end
}).listen(8080)
