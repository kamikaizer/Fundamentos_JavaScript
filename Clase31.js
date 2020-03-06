const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL ='people/:id'
const opts = { crossDomain: true }
// con la primer constante se busca en la url la persona y con el replace se cambia el :id por el numero del personaje
// crossDomain indica que se hara una peticion hacia otra pagina


function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

  $.get(url, opts, function (persona) {
    console.log(`Hola, yo soy ${persona.name}`)
    if (callback){
      callback()
    }
  })
}

// CALLBACK HELL
obtenerPersonaje(1, function () {
  obtenerPersonaje(2, function () {
    obtenerPersonaje(3, function () {
      obtenerPersonaje(4, function () {
        obtenerPersonaje(5, function () {
          obtenerPersonaje(6, function () {
            obtenerPersonaje(7)
          })
        })
      })
    })
  })
})
// el callbackhell sirve para que los request sean en orden y no aleatoreamente como en el ejercicio de la clase anterior




// obtenerPersonaje 1, 2, 3 saldran de manera aleatorea en la consola por el asincronismo
