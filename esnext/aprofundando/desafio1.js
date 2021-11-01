const fs = require('fs')
const path = require('path')
const fileReaderPromise = (fileName) => {

    const filePath = path.join(__dirname, fileName)

    return new Promise((resolve, reject) => {
        try {
            fs.readFile(filePath, (_, content) => {
                resolve(content.toString())
            })
        } catch (error) {
            reject(error)
        }
    })
}

fileReaderPromise('data.txt')
    .then(res => res.split('\n'))
    .then(array => array.join(','))
    .then(final => `The final content is: ${final}`)
    .then(console.log)
    .catch(error => console.log(error))