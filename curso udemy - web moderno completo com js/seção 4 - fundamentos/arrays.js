const valores = [7.3, 9.2, 0.2, 2.1]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({ id: 3 }, false, null, 'teste')
console.log(valores)

console.log(valores.pop())
delete valores[2]
console.log(valores)

console.log(typeof valores)
