const pessoas = ['Emerson', 'Murilo', 'Mota', 'Ludio', 'Vinícius', 'Lucas']
pessoas.pop() //remove the last element
pessoas.shift() //remove the first element 
pessoas.push('Dudinha') //add a new element in the last position
pessoas.unshift('Tayane') //add a new element in the first position
pessoas.splice(2, 0, 'Laura') //add in the index 3 a new element
pessoas.splice(2, 1) //remove the element in the index 2
const recorte = pessoas.slice(2, 5) //returns a new array; cuts a part of an array 

console.log(pessoas)
