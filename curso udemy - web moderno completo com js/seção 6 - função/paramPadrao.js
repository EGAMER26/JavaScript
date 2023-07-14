// estrategia 1 para gerar valor padrão
function som1(a, b, c) {
    
    a = a || 1
    b = b || 1
    c = c || 1
return a + b + c
}
console.log(som1(), som1(3), som1(2,4,6))


// este da erro, pois como 0 é considerado falso, o programa atribui o valor 1, retornado 3 em vez de 0
console.log(som1(0, 0, 0)) 


// estrategia 2, 3 e 4 para gerar valor padrão
function som2(a ,b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    // melhor opção para caso o usuario escreva texto
    c = isNaN(c) ? 1 : c 
    return a + b + c
}

console.log(som2(), som2(3), som2(2,4, 6))

console.log(som2(0,0,0))

// valor  padrão es2015
// este recurso não é viavel caso queira impedir injeção de texto 
function som3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(som3(),som3(3), som3(2,4, 6))

console.log(som3(0,0,0))