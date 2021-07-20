function f1(id, n1, n2, n3) {
    let notas, media, status, maior = n1, b2 = false, b3 = false
    if(n2 > maior) {maior = n2; b2 = true}
    else if(n3 > maior) {maior = n3; b3 = true}
    if(b2) {
        notas = [n1, n2, n3]
        media = (n2*0.4) + (n3*0.3) + (n1*0.3)
        if(media >= 5) status = 'aprovado'
        else status = 'reprovado'
        return `id: ${id}\nnotas: ${notas}\nmedia: ${media}\nstatus: ${status}`
    } else if(b3){
        notas = [n1, n2, n3]
        media = (n3*0.4) + (n2*0.3) + (n1*0.3)
        if(media >= 5) status = 'aprovado'
        else status = 'reprovado'
        return `id: ${id}\nnotas: ${notas}\nmedia: ${media}\nstatus: ${status}`
    } else {
        notas = [n1, n2, n3]
        media = (n1*0.4) + (n2*0.3) + (n3*0.3)
        if(media >= 5) status = 'aprovado'
        else status = 'reprovado'
        return `id: ${id}\nnotas: ${notas}\nmedia: ${media}\nstatus: ${status}`
    }
}

console.log(f1(2, 10, 5, 5))
console.log(f1(2, 5, 5, 10))