  function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma(2))
console.log(soma(2,4,3,6))
console.log(soma(2, 5, "teste"))
console.log(soma("a", "b"))