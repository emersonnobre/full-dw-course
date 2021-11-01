const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))

app.post('/usuarios', (req, res) => {
    let user = {}
    try {
        user = req.body
        if(!user.ativo) user.ativo = false
        else user.ativo = true
        console.log(user)
    } catch (err) {
        throw new Error('ERRO: ' + err.message)
    }
})

app.get('/usuarios/:id', (req, res) => {
    console.log(req.params.id)
})

try {
    app.listen(3003, () => console.log('the server is open'))
} catch (err) {
    console.error(err)
}