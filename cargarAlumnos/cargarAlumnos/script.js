class Alumno{
    constructor(firstName, lastName, pass, mail){
        this.firstName = firstName;
        this.lastName = lastName;
        this._pass = pass;
        this.email = mail;
    }

    getPass(){ //metodo de la clase
        return this._pass;
    }

    getEmail(){ //metodo de la clase
        return this.email;
    }

    getNombre(){ //metodo de la clase
        return this.firstName;
    }

    fullName(){ //metodo de la clase
        return this.firstName + ' ' + this.lastName;
    }

}

var alumnoList = new Array();

let formulario = document.getElementById("formulario")

let flag = 0;

//const cargar = document.getElementById("cargar")

cargar.addEventListener("click" , (evento) => {
   
    //evento.preventDefault()


    const nombre = document.getElementById("nombre").value ?? 0
    const apellido = document.getElementById("apellido").value ?? 0
    const pass = document.getElementById("pass").value ?? 0
    const mail = document.getElementById("email").value ?? 0

    
    
    var security = document.getElementById("security")
    security.innerText = checkPasswordStrength(pass)

    const confirmacion = checkPasswordStrength(pass)

    if(!confirmacion) {
        alert("No hago nada")
    } else {
        let alumno = new Alumno(nombre, apellido, pass, mail)
        alumnoList.push(alumno)
    
        console.log(alumnoList)
    
        document.getElementById("resultado").innerHTML += nombre + ' ' + apellido + ' ' + pass + ' ' + mail
    }
    

    //mostrarDatos(flag , alumno)
});

const buscar = document.querySelector("[buscar]");

buscar.addEventListener("click", (evento) => {
    //evento.preventDefault()
    
    const nombre = document.getElementById("nombre2").value ?? 0
    const pass = document.getElementById("pass2").value ?? 0
    
/* agregar un formulario mas */
/* agregar condiciones para busqueda
/* agregar mas personas */
/* agregar condiciones a la contraseña */

    if(alumnoList.length != 0 ){
        alumnoList.forEach(alumno => {
            if(alumno.getNombre() == nombre && alumno.getPass() == pass){
                mostrarDatos(alumno.getEmail())
            }else{
                mostrarDatos("No se ha encontrado a la persona")
           }
        })
    }else{
        mostrarDatos("No hay elementos")
   }
});

function mostrarDatos(email){
        document.getElementsByTagName('p')[3].innerHTML = email ; //obtengo todas las etiquetas p y selecciono la 4
}

/*
function chequearContra (pass)
{
    const passChar = pass.split("")
    console.log(passChar)
    var int i =0
    var flagNum = 0
    while(i<passChar.length && flagNum===0)
    {
        if(passChar[i].isInteger)
        {
            flagNum = 1
        }
        i++
    }
    */

    function checkPasswordStrength(password) {
        // Initialize variables
        var strength = 0;
        var tips = "";

        if(password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)) { 
            alert("la contraseña ciumple")
        } else {
            alert("npo cuimple")
        }
      
        // // Check password length
        // if (password.length < 8) {
        //   tips += "Hace la contraseña mas larga. ";
        // } else {
        //   strength += 1;
        // }
      
        // // Check for mixed case
        // if (password.match(/[a-z]/) && password.match(/[A-Z]/)) {
        //   strength += 1;
        // } else {
        //   tips += "Usa Mayus y minus. ";
        // }
      
        // // Check for numbers
        // if (password.match(/\d/)) {
        //   strength += 1;
        // } else {
        //   tips += "Inclui un numero. ";
        // }
      
        // // Check for special characters
        // if (password.match(/[^a-zA-Z\d]/)) {
        //   strength += 1;
        // } else {
        //   tips += "Inclui un caracter especial. ";
        // }
      
        // // Return results
        // if (strength < 2) {
        //   return "facil. " + tips;
        // } else if (strength === 2) {
        //   return "Maso maso. " + tips;
        // } else if (strength === 3) {
        //   return " very Difficul. " + tips;
        // } else {
        //   return "super  difficul. " + tips;
        // }

        return false
      }
