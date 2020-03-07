const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL ='people/:id'
const opts = { crossDomain: true }
// con la primer constante se busca en la url la persona y con el replace se cambia el :id por el numero del personaje
// crossDomain indica que se hara una peticion hacia otra pagina


function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

  // $.get(url, opts, callback).fail(function(){
    // console.log(`Se ha proucido un error, no se a podido obtener el personaje ${id}`)
  // })

  // $
  // .get(url,opts, callback)
  // .fail(function(){
    // console.log(`Se ha producido un error, no se a podido obtener el personaje ${id}`)
  // })
  // otra forma de escribirlo es...
  $
  .get(url,opts, callback)
  .fail(() => {
    console.log(`Se ha producido un error, no se a podido obtener el personaje ${id}`)
  })

  })
}

// CALLBACK HELL
obtenerPersonaje(1, function (personaje) {
  console.log(`Hola, yo soy ${personaje.name}`)

  obtenerPersonaje(2, function (personaje) {
    console.log(`Hola, yo soy ${personaje.name}`)

    obtenerPersonaje(3, function (personaje) {
      console.log(`Hola, yo soy ${personaje.name}`)

      obtenerPersonaje(4, function (personaje) {
        console.log(`No i am your father, ${personaje.name}`)

        obtenerPersonaje(5, function (personaje) {
          console.log(`Hola, yo soy ${personaje.name}`)

          obtenerPersonaje(6, function (personaje) {
            console.log(`Hola, yo soy ${personaje.name}`)

            obtenerPersonaje(7, function (personaje) {
              console.log(`Hola, yo soy ${personaje.name}`)
            })
          })
        })
      })
    })
  })
})
// el callbackhell sirve para que los request sean en orden deseado
