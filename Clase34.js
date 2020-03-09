const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL ='people/:id'
const opts = { crossDomain: true }
// con la primer constante se busca en la url la persona y con el replace se cambia el :id por el numero del personaje
// crossDomain indica que se hara una peticion hacia otra pagina


function obtenerPersonaje(id) {
  return new Promise((resolve,reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $
      .get(url,opts,function(data){
        resolve(data)
      })
      .fail(() => reject(id))
  })
}

function onError(id){
  console.log(`Sucedio un error al conseguir ${id}`)
}
var ids = [1, 2, 3, 4, 5, 6, 7]

// var promesas = ids.map(function(id) {
//   return obtenerPersonaje(id)
// })

var promesas = ids.map(id =>obtenerPersonaje(id))
// esto es lo mismo que el codigo de la linea 24 a 26
Promise
  .all(promesas)
  .then(personajes => console.log(personajes))
  .catch(onError)

// // encadenar Promesas
// // para que sea mas facil de leer que en la clase 31
// obtenerPersonaje(1)
//   .then(personaje => {
//     console.log(`El personaje 1 es ${personaje.name}`)
//     return obtenerPersonaje(2)
//   })
//   .then(personaje => {
//     console.log(`El personaje 2 es ${personaje.name}`)
//     return obtenerPersonaje(3)
//   })
//   .then(personaje => {
//     console.log(`El personaje 3 es ${personaje.name}`)
//     return obtenerPersonaje(4)
//   })
//   .then(personaje => {
//     console.log(`El personaje 4 es ${personaje.name}`)
//     return obtenerPersonaje(5)
//   })
//   .then(personaje => {
//     console.log(`El personaje 5 es ${personaje.name}`)
//     return obtenerPersonaje(6)
//   })
//   .then(personaje => {
//     console.log(`El personaje 6 es ${personaje.name}`)
//     return obtenerPersonaje(7)
//   })
//   .then(personaje => {
//     console.log(`El personaje 7 es ${personaje.name}`)
//   })
//   .catch(onError)
