const returnStatus = (score) => {
    if(score < 38) {
        return 'Disaproved'
    } else {
        if((score+2)%5 == 0){ 
            return 'Aproved: ' + (score+2)
        }else if((score+1)%5 == 0) {
            return 'Aproved: ' + (score+1)
        } else {
            return 'Aproved: ' + score
        }
    }
}

console.log(returnStatus(37))