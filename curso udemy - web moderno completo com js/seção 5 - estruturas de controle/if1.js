function soBoaNoticia(nota) {
     if (nota >= 7) {
        console.log('aprovado com: ' + nota)
     }
}
soBoaNoticia(9.2)
soBoaNoticia(4.2)

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo(0)
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,3,5,7])
seForVerdadeEuFalo({})
