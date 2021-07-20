function isBisxt(year) {
    if(year%400 == 0) {
        return 'is Bisxt'
    } else if (year%4 == 0) {
        if(year%100 == 0) {
            return 'is not Bisxt'
        } else {
            return 'is Bisxt'
        }
    } else {
        return 'is not Bisxt'
    }
}

console.log(isBisxt(100))
console.log(isBisxt(400))
console.log(isBisxt(87))
console.log(isBisxt(12))