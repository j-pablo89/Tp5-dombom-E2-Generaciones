// 2- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. 
// Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece 
// la persona creada y cual es el rasgo característico de esta generación.
// Para realizar este método tener en cuenta la siguiente tabla de generaciones:

let formulario = document.querySelector('form');
let botonReset = document.getElementById('botonReset');
let divBotonReset = document.querySelector('#divBotonReset');
let botonMayorEdad = document.getElementById('mayorEdad');
let contenedorPadreMayorEdad = document.querySelector('#mayorEdad');
let botonMostrarDatos = document.getElementById('mostrarDatosPersona');
let contenedorPadreMostrarDatos = document.querySelector('#mostrarDatosPersona');
let persona;
botonReset.addEventListener('click',resetPantalla);
formulario.addEventListener('submit',guardarDatos);
botonMayorEdad.addEventListener('click',mayorEdad);
botonMostrarDatos.addEventListener('click',mostrarDatos);
class Persona {
    #nombre;
    #edad;
    #dni;
    #sexo;
    #peso;
    #altura;
    #anioNacimiento;

    constructor(nombre,edad,dni,sexo,peso,altura,anioNacimiento){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#dni = dni;
        this.#sexo = sexo;
        this.#peso = peso;
        this.#altura = altura;
        this.#anioNacimiento = anioNacimiento;
    }

    get dni(){
        return this.#dni;
    }

    set dni(nuevoDni){
        if(nuevoDni>0){
            this.#dni = nuevoDni;
        }
    }

    esMayorDeEdad(){
        let alerta = document.createElement('div');
        if(this.#edad > 18){
            alerta.innerHTML = 'Es mayor de Edad';
            alerta.className = 'alert alert-primary p-2';
            contenedorPadreMayorEdad.appendChild(alerta);
        }else{
            alerta.innerHTML = 'No es mayor de Edad';
            alerta.className = 'alert alert-primary p-2';
            contenedorPadreMayorEdad.appendChild(alerta);
        }
    }

    mostrarDatos(){
        let alerta = document.createElement('p');
        alerta.innerHTML = `Nombre: ${this.#nombre}<br>
        Edad: ${this.#edad}<br>
        DNI: ${this.#dni}<br>
        Sexo: ${this.#sexo}<br>
        Peso: ${this.#peso}<br>
        Altura: ${this.#altura}<br>
        Año Nacimiento: ${this.#anioNacimiento}<br>`;
        alerta.className = 'alert alert-info pt-3'
        contenedorPadreMostrarDatos.appendChild(alerta);
    }

    mostrarGeneracion(){
        let alerta = document.createElement('div');
        if(this.#anioNacimiento >= 1930 && this.#anioNacimiento <= 1948 ){
            alerta.innerHTML = `Generacion: Silent Generation - Los niños de la postguerra - Austeridad 😐`;
            alerta.className = 'alert alert-primary pt-3';
            divBotonReset.appendChild(alerta);
        }
        if(this.#anioNacimiento >= 1949 && this.#anioNacimiento <= 1968 ){
            alerta.innerHTML = `Generacion: Baby Boom - Ambición 🤑`;
            alerta.className = 'alert alert-secondary pt-3';
            divBotonReset.appendChild(alerta);
            
        }
        if(this.#anioNacimiento >= 1969 && this.#anioNacimiento <= 1980 ){
            alerta.innerHTML = `Generacion: X - Obsesión por el éxito 😎`;
            alerta.className = 'alert alert-success pt-3';
            divBotonReset.appendChild(alerta);
        }
        if(this.#anioNacimiento >= 1981 && this.#anioNacimiento <= 1993 ){
            alerta.innerHTML = `Generacion: Y - Frustración 😧`;
            alerta.className = 'alert alert-danger pt-3';
            divBotonReset.appendChild(alerta);
        }
        if(this.#anioNacimiento >= 1994 && this.#anioNacimiento <= 2010 ){
            alerta.innerHTML = `Generacion: Z - Irreverencia 😋`;
            alerta.className = 'alert alert-warning pt-3';
            divBotonReset.appendChild(alerta);
        }
    }
}

function guardarDatos(e){
   e.preventDefault();
   let nombre = document.querySelector('#inputNombre').value;
   let edad = document.querySelector('#inputEdad').value;
   let dni = document.querySelector('#inputDNI').value;
   let peso = document.querySelector('#inputPeso').value;
   let altura = document.querySelector('#inputAltura').value;
   let sexo = document.querySelector('input[type=radio][name=inlineRadioOptions]:checked').value;
   let anioNacimiento = document.querySelector('#inputAnioNacimiento').value;
   persona = new Persona(nombre,edad,dni,sexo,peso,altura,anioNacimiento);
   persona.mostrarGeneracion();
   formulario.reset();
   return persona;
}

function mayorEdad(){
    persona.esMayorDeEdad();
}

function mostrarDatos(){
    persona.mostrarDatos();
}

function resetPantalla(){
    console.log(divBotonReset.children);
    divBotonReset.removeChild(divBotonReset.children[1]);
    contenedorPadreMayorEdad.removeChild(contenedorPadreMayorEdad.children[1]);
    contenedorPadreMostrarDatos.removeChild(contenedorPadreMostrarDatos.children[1]);
}

