var edad = 31

//edad = edad + 1         //incremento en uno el valor de una variable
//console.log(edad)

edad += 1                   //esto es igual a edad = edad + 1 
//console.log(edad)

var peso = 75

//peso = peso - 2  

peso -= 2               //esto es igual a peso = peso -2
//console.log(peso)

var sandwich = 1

peso = peso + sandwich
console.log(peso)

var jugarAlFutbol = 3
peso -= jugarAlFutbol
console.log(peso)


//decimales

var precioVino = 200.3
var total = Math.round(precioVino * 100 * 3) / 100   //"Math.round" para redondear
var totalStr = total.toFixed(2)                      //"toFixed(2)" para agregar decimales
var total2 = parseFloat(totalStr)                   //"parseFloat" pasar de un string a un flotante osea a numero decimal
console.log(total2)

//divicion

var pizza = 8
var persona = 2

var cantidadDePorcionesPorPersona = pizza / persona
console.log(cantidadDePorcionesPorPersona)  