const isOdd = (nombre) => {
 if (nombre % 2 === 0  ){
    return false

 }
 else{
        return true
  }  
}
console.log(isOdd(10))
   
 
const isEven = (nombre2) =>{
     return !isOdd(nombre2)
 }  
 
 console.log(isEven(10))
  
 
// isOdd()