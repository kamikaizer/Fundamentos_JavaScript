var nombre = Martín', apellido ='Matayoshi'

var NombreEnMayuscula = nombre.toUpperCase()
var ApellidoEnMinuscula = apellido.toLowerCase()

var PrimeraLetraDelapellido = apellido.charAt(1)
var Cantidaddeletras = nombre.length

var nombrecompleto = `${nombre} ${apellido}`/**interpolacion de texto**/
var nombrecompleto = `${nombre.toUpperCase()} ${apellido.toLowerCase()}/**se puede escribir codigo JS en la interpolacion de texto**/

var str = nombre.charAt(0)+nombre.charAt(2) /**trae letra posicionada en 0 y 2**/
var str = nombre.substr(0,2)/**trae las letras de 0 al 2**/
