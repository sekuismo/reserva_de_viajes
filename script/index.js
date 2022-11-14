//API DOLAR precio actual
let dolarHoy = 0.0
const URL = 'https://mindicador.cl/api/dolar'
async function dolar(){
    const res = await fetch(URL)
    const data = await res.json()
    dolarHoy = data.serie[0].valor
}
dolar()


class Tour{
    constructor(id,nombre,valorBase){
        this.id = id
        this.nombre = nombre
        this.valorBase = valorBase
    }
    setId(id){
        this.id = id
    }
    getId(){
        return this.id
    }
    setNombre(nombre){
        this.nombre = nombre
    }
    getNombre(){
        return this.nombre
    }
    setValorBase(valorBase){
        this.valorBase = valorBase
    }
    getValorBase(){
        return this.valorBase
    }
    
}



  class Persona{

    constructor(identificacion,nombre,apellido,edad,correo,pais){
        this.identificacion = identificacion
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.correo = correo
        this.pais = pais
    }

    setId(id){
        this.identificacion = id
    }
    getId(){
        return this.identificacion
    }
    setNombre(nombre){
        this.nombre = nombre
    }
    getNombre(){
        return this.nombre
    }
    setApellido(apellido){
        this.apellido = apellido
    }
    getApellido(){
        return this.apellido
    }
    setEdad(edad){
        edad = parseInt(edad)
        this.edad = edad
    }
    getEdad(){
        return this.edad
    }
    setCorreo(correo){
        this.correo = correo
    }
    getCorreo(){
        return this.correo
    }
    setPais(pais){
        this.pais = pais
    }
    getPais(){
        return this.pais
    }
}


 class Inscripcion{
    constructor(id,persona,tour,valorBase,descuento,seguro,iva,valorFinal){
        this.id = id
        this.persona = persona
        this.tour = tour
        this.valorBase =valorBase
        this.descuento = descuento
        this.seguro = seguro
        this.iva = iva
        this.valorFinal = valorFinal
    }
    setId(id){
        this.id = id
    }
    getId(){
        return this.id
    }
    setPersona(persona){
        this.persona = persona
    }
    getPersona(){
        return this.persona
    }
    setTour(tour){
        this.tour = tour
    }
    getTour(){
        return this.tour
    }
    setValorBase(valorBase){
        this.valorBase = valorBase
    }
    getValorBase(){
        return this.valorBase
    }
    setDescuento(descuento){
        this.descuento = descuento
    }
    getDescuento(){
        return this.descuento
    }
    setSeguro(seguro){
        this.seguro = seguro
    }
    getSeguro(){
        return this.seguro
    }
    setIva(iva){
        this.iva = iva
    }
    getIva(){
        return this.iva
    }
    setValorFinal(valorFinal){
        this.valorFinal = valorFinal
    }
    aplicarDescuento(valor){
        return  this.valorBase * valor 
    }
}


onclick="apuntarPersona(${numeroPersona})"
let numeroDePersonaLista = 0
    //esta función crea una variable para saber a que posición del array de personas
    // apuntar a la hora de reservar
function apuntarPersona(numero){
    numeroDePersonaLista = numero
}



//toures
const tourUno = new Tour()
tourUno.setId(1)
tourUno.setNombre('Valle de la luna')
tourUno.setValorBase(parseFloat(37.5))

const tourDos = new Tour()
tourDos.setId(2)
tourDos.setNombre('Geisers del Tatio')
tourDos.setValorBase(parseFloat(69))

const tourTres = new Tour()
tourTres.setId(3)
tourTres.setNombre('Laguna cejar')
tourTres.setValorBase(parseFloat(55))

const arrayToures = [tourUno,tourDos,tourTres]


//mostrar info de toures
function infoTour(){


    let infoTourUno = document.getElementById('tour-1')
    infoTourUno.innerHTML = tourUno.getNombre()
    let infoTourDos = document.getElementById('tour-2')
    infoTourDos.innerHTML = tourDos.getNombre()
    let infoTourTres = document.getElementById('tour-3')
    infoTourTres.innerHTML = tourTres.getNombre()
    }
    infoTour()    


//instancia de clase
const persona = new Persona()
const personas = []

//ingresar personas
function ingresar(){
    //declarar variables para los inputs
    
    id = document.getElementById('rut').value
    nombre = document.getElementById('nombre').value
    apellido = document.getElementById('apellido').value
    edad = document.getElementById('edad').value
    correo = document.getElementById('correo').value
    pais = document.getElementById('pais').value




    //instanciar la clase

    const persona = new Persona()
    persona.setId(id)
    persona.setNombre(nombre)
    persona.setApellido(apellido)
    persona.setEdad(edad)
    persona.setCorreo(correo)
    persona.setPais(pais)
    //arreglo de clases
    personas.push(persona)


    //tbody
    const cuerpo = document.getElementById('cuerpo')
    //contador de personas
    let cantidad = 1
    let numeroPersona = 0
    // se vacía el elemento para que no se repita la lista
    cuerpo.innerHTML= ""
    personas.forEach(clase =>{
        
        //se extraen atributos de la clase iterada
        const id = clase.getId()
        const nombre = clase.getNombre()
        const apellido = clase.getApellido()
        const edad = clase.getEdad()
        const correo = clase.getCorreo()
        const pais = clase.getPais()
        

        

        cuerpo.innerHTML += `<tr> <td> ${cantidad}  </td>  <td> ${id} </td>   <td> ${nombre} </td> <td> ${apellido} </td> <td> ${edad} </td> <td> ${correo} </td> <td> ${pais} </td> <td> <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="apuntarPersona(${numeroPersona})" >Aquí</button> </td>  </tr>       `

        
        cantidad += 1
        //contador de instancias para el botón
        numeroPersona += 1


        // seleccionar-persona


    let nombreModal = document.getElementById('modal-persona').innerHTML = `${personas[numeroDePersonaLista].getNombre()} ${personas[numeroDePersonaLista].getApellido()} ha sido seleccionado! ` 


    })
ocultamiento()


    

    
}
function ocultamiento(){
    let ocultar = document.getElementById('seleccionar-persona')
if(personas.length == 0){
    ocultar.style.visibility = "hidden"
}
else{
    ocultar.style.visibility = "visible"
}

}
ocultamiento()


//personas

//instancia de inscripción 

const inscripciones = []

function reservarUno(numero){
    let inscribir = new Inscripcion()
    inscribir.setId(personas[numeroDePersonaLista].getId())
    inscribir.setPersona(personas[numeroDePersonaLista].getNombre() + " " + personas[numeroDePersonaLista].getApellido())
    inscribir.setTour(arrayToures[numero].getNombre())
    inscribir.setValorBase(arrayToures[numero].getValorBase() )
    //descuento  por edad
    if (personas[numeroDePersonaLista].getEdad() < 18 ){
        inscribir.setDescuento(parseFloat(0,05))
    }
    if(personas[numeroDePersonaLista].getEdad() > 60 ){
        inscribir.setDescuento(parseFloat(0.3))
    }
    else{
        inscribir.setDescuento(parseInt(0))
    }

    inscribir.setSeguro(inscribir.getValorBase() * 0.05 )
    inscribir.setIva(inscribir.getValorBase() * 0.19)

    // valor final del tour
    //el valor base es el que se pasa a pesos chilenos a través de la API
    inscribir.setValorFinal(
        (inscribir.getValorBase() * dolarHoy) +
        inscribir.getSeguro() + 
        inscribir.aplicarDescuento(inscribir.getDescuento()) +
        inscribir.getIva() 
    )
    inscripciones.push(inscribir)

    console.log(inscripciones[0])
    console.log('funcionó bien! :)')
    


    


}


