var x = 4, y = '4'

var martin = {
  nombre: 'Martin'
}

var otroNombre = {
  nombre: 'Martin'
}

//martin == otroNombre / false porque ambos tienene nombre distiendo  de var
//martin === otroNombre / false porque ambos tiene el mismo nombre designado como objeto

var martin = {
  nombre: 'martin'
}
var otroNombre = 'martin'

//martin == otroNombre / true porque otronombre esta invocando la var anterior

var martin = {
  nombre: 'martin'

var otrapersona = {
  ...martin
}
//martin == otrapersona //false porque otrapersona es un nuevo objeto
