const schedule = require('node-schedule')

const task1 = schedule.scheduleJob('*/5 * * * * *', () => {
    console.log('Executing... ', new Date().getSeconds())
})

setTimeout(() => {
    task1.cancel()
    console.log('parando...')
}, 10000)