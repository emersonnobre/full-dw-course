function f1(st1, st2) {
    let handler = false
    for(let i = 0; i < st1.length; i++) {
        for(let j = 0; j < st2.length; j++) {
            if(st1.charAt(i) == st2.charAt(j)) handler = true
        }
        if(!handler) return false
        handler = false
    }
    return true
}

console.log(f1('boasdfafca' , 'bocdafdsfa'))