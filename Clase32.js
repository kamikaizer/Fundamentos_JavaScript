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

obtenerPersonaje(1)
  .then(function(personaje){
    console.log(`El personaje 1 es ${personaje.name}`)
  })
  .catch(onError)
  
