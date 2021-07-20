function hello() {
    let i = 1
    while(i <= 11) {
        console.log('Hello World!!!')
        setInterval(console.log('Hello World!!'), 1000)
    }
}

hello()