const verifyModule3 = (number) => {
    if(number%3 == 0) return [true, number/3]
    else return [false, number/3]
}

console.log(verifyModule3(30))