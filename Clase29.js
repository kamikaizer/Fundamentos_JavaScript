const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL ='people/:id'
const opts = { crossDomain: true }
// con la primer constante se busca en la url la persona y con el replace se cambia el :id por el numero del personaje
// crossDomain indica que se hara una peticion hacia otra pagina

const onPeopleResponse = function (persona){
  console.log(`Hola, yo soy ${persona.name}`)
}

function obtenerPersonaje(id) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
  $.get(url, opts, onPeopleResponse)
}
obtenerPersonaje(7)
