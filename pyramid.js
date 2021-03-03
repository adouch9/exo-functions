
  const pyramid = (nbElement, renverse, str) => {
    if(!renverse) {
      for(let i = 0; i <= nbElement; i++) {
        console.log(str.repeat(i));
      } 
    } else {
      for(let i = nbElement; i >= 1; i--) {
        console.log(str.repeat(i))
      }
    }
  }
  
  (pyramid(10, false, "A"))



  // const pyramid = (nombre, pattern, reverse) => {
//     let str = ''    
//     if(!reverse) {
//          for(let i = 1; i <= nombre; i++) {
//             str += pattern.repeat(i)
//          if (i !==nombre) {
//             str += '\n'
//           }
//         }     
//       } else {
//          for(let i = nombre; i >= 1; i--) {
//             str += pattern.repeat(i)
//          if(i !==1) {
//             str += '\n'
//           }
//         }
//       }
//          return str
//     }
  
//   let str1 = pyramid(23, 'oui', false)
//   console.log(str1)
