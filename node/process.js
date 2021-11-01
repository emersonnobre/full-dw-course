const anonimo = process.argv.indexOf('-a') !== -1

if(anonimo) {
    process.stdout.write('Falaaa dev!\n')
    process.exit()
} else {
    process.stdout.write('Qual teu nome?\n')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '')
        process.stdout.write(`Falaaaa, ${nome}, meu maninho!\n`)
        process.exit()
    })
}
