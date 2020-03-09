const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL ='people/:id'
const opts = { crossDomain: true }
// con la primer constante se busca en la url la persona y con el replace se
// cambia el :id por el numero del personaje
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

//Función ejecutada si se detecta una promesa en estado rejected o rechazada
function onError(id){
  console.log(`Sucedio un error al conseguir ${id}`)
}
async function oSbtenerPersonaje() {
  var ids = [1, 2, 3, 4, 5, 6, 7]
  var promesas = ids.map(id => obtenerPersonaje(id))
//Se debe colocar la sección asíncrona de la función en un bloque Try/Catch
  try {
    var personajes = await Promise.all(promesas)
  // await hace que espere a que se cumplan todas las promesas para que luego el
  // valor se guarda en la var personases
    console.log(personajes)
  } catch (id) {
  onError(id)
  }
}
obtenerPersonaje()
