// função em JS é First-Class Object (Citizens)
// Higher-order function

// Criar de forma literal 
function fun1() { }

// Armazenar em uma variável 

const fun2 = function () {}

// Armazenar em um array 
const array = [function (a,b) { return a + b}, fun1, fun2]
console.log(array[0](2,3))

// Armazenar em um atributo de objeto 
const obj = {}
obj.falar= function () {return 'opa'}
console.log(obj.falar())

// Passar função como param
function run(fun) {
    fun()
}

run(function () {console.log('execultando...')})

// Uma função pode retornar/conter uma função
function soma(a,b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2,5)(5)
cincomais = soma(2,3)
cincomais(4)