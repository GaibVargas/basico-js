// Começando com git!
// Escopo no var
if (true) {
  const variavel = 'msg'
  // console.log(variavel)
}
// console.log(variavel)

// Const e mutabilidade
const person = {
  name: 'Gabriel',
  age: 21,
  address: {
    uf: 'SC',
    city: 'Sombrio',
  },
}
Object.freeze(person)
person.name = 'outro nome'
person.address.uf = 'RJ'
// console.log(person)

const array = [1, 2, 3]
array.push(4)
console.log(array)