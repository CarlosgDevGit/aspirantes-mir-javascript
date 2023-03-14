// escribe la función max acá

function max(array){

   
        if (array.length === 0){
            
            return undefined
        }
        else {

            let y = 0
            let z = 0

            for (let i = 0; i < array.length; i++) {
            
                y = array[i] 

                if (z > y){
                    
                }
                else {
                    z = y
                }
            
            }
            
            return z;
        }
    
    }

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined