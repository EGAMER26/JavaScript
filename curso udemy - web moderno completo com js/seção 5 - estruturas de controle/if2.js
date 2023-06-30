function teste1 (num) {
    if (num > 7)
        console.log(num)
        console.log('final')
}
teste1(8)
teste1(6)

function teste2 (num) {
    if(num > 7); // o ";" é uma sentença de codigo vazia, logo o if esta atrelando o ";" a ele,
                // fazendo com que o valor impresso no console não seja apenas os maiores que 7
    {
        console.log(num)
    }
}
teste2(6)
teste2(8)
