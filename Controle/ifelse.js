const imprimirResultado = function(nota) {
    if(nota >=7) {
        console.log('APROVADO!!!')
    } else {
        console.log('REPROVADO!!!')
    }
}

imprimirResultado(9)
imprimirResultado(4)
imprimirResultado('EPA!') // CUIDADO!!!!! linguagem fracamente tipada, então o programa aceita
                          // string colocando ela como c fosse 'false'
