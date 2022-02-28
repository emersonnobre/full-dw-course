import express from 'express'

//middlewares
import logReq from './src/middleware/log.js'
import main from './src/middleware/main.js'

//routes
import clients from './src/controller/clients.js'

const app = express()
const port = 3001

//using middlewares
app.use(express.static('public'))
app.use(express.json())
app.use(main)
app.use(logReq)

//using routes
app.use('/clients', clients)

app.get('/download', (req, res) => {
    res.status(200).download(
        './public/image/Kanao_bidding_farewell_to_Tanjiro.png'
    )
})

app.get('/errorHandling', (req, res) => {
    throw new Error('Alguma coisa quebrou')
})

app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).send('Alguma coisa quebrou aqui dentro, tente novamente mais tarde!')
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})