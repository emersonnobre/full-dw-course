function f1(age) {
    const base = 100
    if(age >= 0 && age < 10) {
        return base + 80
    } else if(age >= 10 && age <= 30) {
        return base + 50
    } else if(age > 30 && age <= 60) {
        return base + 95
    } else if(age > 60) {
        return base + 130
    } else {
        return 'invalid age'
    }
}

console.log(f1(1))
console.log(f1(11))
console.log(f1(31))
console.log(f1(100))