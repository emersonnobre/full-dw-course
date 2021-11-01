const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`

    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''

            res.on('data', dados => {
                resultado += dados
            })

            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(err) {
                    reject(err)
                }
            })
        })
    })
}

const getStudents = async () => {
    const classA = await getTurma('A')
    const classB = await getTurma('B')
    const classC = await getTurma('C')
    return [].concat(classA, classB, classC)
}

getStudents()
    .then(students => students.map(student => student.nome))
    .then(names => names.map(n => formatStudentName(n)))
    .then(formatedNames => console.log(formatedNames))
    .catch(err => console.log(err))
//exit 

const formatStudentName = (studentName) => {
    return `Student: ${studentName}`
}