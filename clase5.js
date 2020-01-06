//alcance global la variable
var nombre = 'martin'

///este codigo modifica la variable nombre mostrandola en mayuscula
///function imprimirNombreEnMayuscula() {
///  nombre = nombre.toUpperCase()
///  console.log(nombre)
///}

//alcance local entre {}
function imprimirNombreEnMayuscula(n) {
  n = n.toUpperCase()
  console.log(n)
}
imprimirNombreEnMayuscula(nombre)

//al cambiar el parameto por n, la var mantiene el atributo mayuscula al,
 //ejecutar el codigo pero se puede acceder al formato original de la var,
 //mencionandola

 //en cosnola al ejecutar mostratia MARTIN y al ejecutar el comando nombre,
 //se visualizaria martin
