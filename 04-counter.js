// Fazendo um contador
let counter = 0
const counterId = setInterval(() => console.log(++counter), 1000)
setTimeout(() => clearInterval(counterId), 5002)