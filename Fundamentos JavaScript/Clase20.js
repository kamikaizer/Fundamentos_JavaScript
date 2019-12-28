var martin = {
  nombre: 'Martin',
  cantidadDeLibros: 20
}
var tania = {
  nombre: 'Tania',
  cantidadDeLibros: 45
}

var personas = [martin, tania]

const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros
//acum sera aumentado cada ves que se le aplique el reducer lo que finaliza con
//la sumatoria en este caso de la camntidad de libros

var totalDeLibros = personas.reduce(reducer, 0)
//reduce el arrays de personas con la funcion reducer y el acumulador desde 0

console.log(`tienen un total de ${totalDeLibros} libros`)
