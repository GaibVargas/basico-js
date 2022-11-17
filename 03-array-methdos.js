const students = [
  {
    name: 'a',
    grade: 7,
    course: 'CCO',
  },
  {
    name: 'b',
    grade: 5,
    course: 'SIN',
  },
  {
    name: 'c',
    grade: 3,
    course: 'CCO',
  },
  {
    name: 'd',
    grade: 6,
    course: 'CCO',
  },
  {
    name: 'e',
    grade: 7.6,
    course: 'SIN',
  },
  {
    name: 'f',
    grade: 7.6,
    course: 'BIO',
  },
]

// Filter
const filterByCourse = (course) => students.filter((elem) => elem.course === course)
// console.group(filterByCourse('SIN'))
// Map
const names = students.map((elem) => elem.name)
// console.log(names)
const namesUpperCase = students.map((elem) => ({ ...elem, name: elem.name.toUpperCase() }))
// console.log(namesUpperCase)
// console.log(students)
// Reduce
const studentsByCourse = students.reduce((acc, elem) => {
  if (acc[elem.course]) {
    return {
      ...acc,
      [elem.course]: [...acc[elem.course], elem]
    }
  }
  return {
    ...acc,
    [elem.course]: [elem]
  }
}, {})
console.log(studentsByCourse)