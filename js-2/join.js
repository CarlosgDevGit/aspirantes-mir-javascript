// escribe la función join acá
function join(array){

   
    if (array.length === 0){
        
        return ""
    }
    else {

        let z = ""
        
        for (let i = 0; i < array.length; i++) {
            z += array[i] + " "
                              
        }
        
        return z.trimEnd();
    }

}

console.log(join([1, 3, 2])) // "1 3 2"
console.log(join([10, 9, 8, 7, 6, 5, 4])) // "10 9 8 7 6 5 4"
console.log(join([])) // ""