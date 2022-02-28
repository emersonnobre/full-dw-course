import express from 'express'
const router = express.Router()

router.use((req, res, next) => {
    console.log('Esse é um middleware específico para as rotas de clients montadas nesse Router!')
    next()
})

router.route('/')
    .get((req, res) => {
        res.send('GET para pegar todos os clients')
    })
    .post((req, res) => {
        res.send('POST para inserir um client')
    })

export default router