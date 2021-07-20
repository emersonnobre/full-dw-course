const f1 = (value) => {
    let cont100 = 0, cont50 = 0, cont10 = 0, cont1 = 0, desc = ''
    if(value/100 >= 1) {
        while(value/100 >= 1) {
            cont100++
            value -= 100
        }
        if(value/50 >= 1) {
            while(value/50 >= 1) {
                cont50++
                value-=50
            }
            if(value/10 >= 1) {
                while(value/10 >= 1) {
                    cont10++
                    value-=10
                }
                if(value/1 >= 1) {
                    while(value/1 >= 1) {
                        cont1++
                        value-=1
                    }
                    
                }
            } else if(value/1 >= 1) {
                while(value/1 >= 1) {
                    cont1++
                    value-=1
                }
                
            }
        } else if(value/10 >= 1) {
            while(value/10 >= 1) {
                cont10++
                value-=10
            }
            if(value/1 >= 1) {
                while(value/1 >= 1) {
                    cont1++
                    value-=1
                }
                
            }
        } else if(value/1 >= 1) {
            while(value/1 >= 1) {
                cont1++
                value-=1
            }
            
        }
        if (cont100) desc += 'Notas de 100: ' + cont100 + '\n'
        if (cont50) desc += 'Notas de 50: ' + cont50 + '\n'
        if (cont10) desc += 'Notas de 10: ' + cont10 + '\n'
        if (cont1) desc += 'Notas de 1: ' + cont1 + '\n'
        
        return desc
    } else if(value/50 >= 1) {
        while(value/50 >= 1) {
            cont50++
            value-=50
        }
        if(value/10 >= 1) {
            while(value/10 >= 1) {
                cont10++
                value-=10
            }
            if(value/1 >= 1) {
                while(value/1 >= 1) {
                    cont1++
                    value-=1
                }
                
            }
        } else if(value/1 >= 1) {
            while(value/1 >= 1) {
                cont1++
                value-=1
            }
            
        }
        if (cont50) desc += 'Notas de 50: ' + cont50 + '\n'
        if (cont10) desc += 'Notas de 10: ' + cont10 + '\n'
        if (cont1) desc += 'Notas de 1: ' + cont1 + '\n'
        return desc
    } else if(value/10 >= 1) {
        while(value/10 >= 1) {
            cont10++
            value-=10
        }
        if(value/1 >= 1) {
            while(value/1 >= 1) {
                cont1++
                value-=1
            }
            
        }
        if (cont10) desc += 'Notas de 10: ' + cont10 + '\n'
        if (cont1) desc += 'Notas de 1: ' + cont1 + '\n'
        return desc
    } else if(value/1 >= 1) {
        while(value/1 >= 1) {
            cont1++
            value-=1
        }
        if (cont1) desc += 'Notas de 1: ' + cont1 + '\n'
        return desc
    }
}

console.log(f1(154))
console.log(f1(1154))
console.log(f1(54))
console.log(f1(32))
console.log(f1(5))
