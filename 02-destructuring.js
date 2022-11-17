// Desestruturando objetos
const person = {
  name: 'Gabriel',
  age: 21,
  address: {
    uf: 'SC',
    city: 'Sombrio',
  },
}

const { name, ...resto } = person
// console.log(resto)

// Desestruturando arrays
const list = [
  { name: 'Aluno1', grade: 8 },
  { name: 'Aluno2', grade: 5.4 },
  { name: 'Aluno3', grade: 7.9 },
  { name: 'Aluno4', grade: 5 },
  { name: 'Aluno5', grade: 0.7 },
]
const [aluno1, aluno2, ...alunos] = list
// console.log(alunos)

// Desestruturação em funções
function logName({ name }) {
  console.log(name)
}
// logName(person)

function add(...args) {
  return args.reduce((acc, cur) => acc + cur, 0)
}
console.log(add(1, 2))
console.log(add(1, 2, 3, 4))