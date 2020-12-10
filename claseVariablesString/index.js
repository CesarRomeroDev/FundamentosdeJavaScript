var nombre = 'julio' , apellido = 'romero'

var nombreEnMayuscula = nombre.toUpperCase()  // para hacer un string en mayusculas ".toUpperCase()"
console.log(nombreEnMayuscula)

var apellidoEnMinuscula = apellido.toLowerCase()   //para hacer un string en minusculas ".tiLowerCase()"
console.log(apellidoEnMinuscula)

var primerLetraDelNombre = nombre.charAt(0)        //para imprimir la primera letra de un string ".charAt()"
console.log(primerLetraDelNombre)

var numeroDeCaracteres = nombre.length          //imprime el numero de caracteres que hay en un string ".length"
console.log(numeroDeCaracteres)

var concatenar = nombre + ' ' + apellido    //para concatenar dos variables "+"
console.log(concatenar)

var interpolacion = `${nombre} ${apellido.toUpperCase()}`   //otra forma de concatenar string "``" se llama interpolacion de texto
console.log(interpolacion)

var str = nombre.substr(3 , 4)   //para acceder a un sub string "substr()"
console.log(str)

var str             //si no sabemos que poner de nombre a una variable, es valido ponerle "str" mistras que se asigna uno


var ultimaLetraNombre = nombre.charAt(4)   
console.log(ultimaLetraNombre)

var ultimaLetraApellido = apellido.slice(-1) // otra forma de acceder a una leytra de un string ".slice(-2)"
console.log(ultimaLetraApellido)