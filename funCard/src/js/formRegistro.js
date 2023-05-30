import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import {auth, guardarUsuario,} from './conexion.js';
import { showMessage} from './showMessage.js';


console.log('hello registro')

//evento del formulario
const contentR = document.querySelector('#signup-form');
console.log(contentR)
contentR.addEventListener('submit', async (e) =>{
    e.preventDefault()

   const nom = contentR['inpNombre'].value
   const ape = contentR['inpApellido'].value 
   const email = contentR['inpEmail'].value
   const pass = contentR['inpPass'].value 

   console.log(nom,ape,email,pass)

   
   try {
    //devuelve los datos del usuario
    const userCredentials = await createUserWithEmailAndPassword(auth, email, pass)
    showMessage("Bienvenido "+ nom, "success")
    //Se guardan los datos en la bd
    guardarUsuario(nom,ape,email,pass) 
    console.log(userCredentials)
    window.open("/vistas/unidades.html","unidades")
    togglePopupR()
    
     // reset the form
    signUpForm.reset();
    
    

  } catch (error) {
    //Errores de Registro
    if(error.code == 'auth/email-already-in-use'){
      showMessage("email ya registrado", "error")
      
    }else if(error.code == 'auth/invalid-email'){
      showMessage("Invalid email", "error")
      
    }else if(error.code == 'auth/weak-password'){
      showMessage("Contraseña debil", "error")
      
    }else if(error.code){
      showMessage(error.message +" Algo fue mal", "error")
      
    }

  }

  


})