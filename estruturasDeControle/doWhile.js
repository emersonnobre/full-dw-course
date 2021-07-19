// entre pelo menos uma vez no while
function returnRandomIntegerBetween(min, max) {
    const value = Math.random() * (max-min) + min
    return Math.floor(value)
}

option = 0

do {
    option = returnRandomIntegerBetween(0, 1)
    console.log(option)
} while (option != 0);