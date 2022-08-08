
console.warn(`Días de la semana`)
const hoy = new Date()
let dia = hoy.getDay()

console.log({ dia })

if(dia ===0) {
   console.log('Domingo')
} else if (dia === 1) {
   console.log('lunes')
} else {
   console.log('No es ni domingo, ni lunes')
}



console.warn(`Punto 1 actividad 4`)

const diasDeLaSemana = [
   'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'
]
 
console.log(diasDeLaSemana[dia])

//  ------------------------------------------

