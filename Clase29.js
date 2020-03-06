const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL ='people/:id'

const charUrl = `${API_URL}${PEOPLE_URL.replace(':id', 4)}`
const opts = { crossDomain: true }
// con la primer constante se busca en la url la persona y con el replace se cambia el :id por el numero del personaje
// crossDomain indica que se hara una peticion hacia otra pagina


// CALLBACK
$.get(charUrl, opts, function (character) {
  console.log(`Hola yo soy ${character.name}`)
})
// esto es el resultado de la consulta de las lineas 4, 5
