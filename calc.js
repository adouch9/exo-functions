const add = (nb1, nb2) => {
    return nb1 + nb2
}

const sub = (nb1, nb2) => {
    return nb1 - nb2
}
const mul = (nb1, nb2) => {
    return nb1 * nb2
}
const div = (nb1, nb2) => {
    return nb1 / nb2
}

const calc = (op, nb1, nb2) => {
    if(op === add || op === sub || op === mul || op === div){
        return op(nb1, nb2)

    }
    

}

console.log(calc(mul,5,5)) 