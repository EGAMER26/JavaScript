 function tratarErroRLancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date 
    }
 }

function imprimirNomeGritando(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroRLancar()
    } finally {
        console.log('final')
    }
}

const obj = {name:'roberto'}
imprimirNomeGritando(obj)