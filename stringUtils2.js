
const reverse = (str) => {
    return str.split("").reverse().join("")
    }

// console.log(reverse("hello"))


const palinDrome = (strSecond) => {

    if (reverse(strSecond) === strSecond ){
        return true
    }
    else{
        return false
    }
}
   
 console.log(palinDrome("été"))
