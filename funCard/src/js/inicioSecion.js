import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { showMessage } from "./showMessage.js";
import { auth } from './conexion.js';


const signIn = document.querySelector('#popup-1')
console.log(signIn)

signIn.addEventListener('submit', async e => {
  e.preventDefault()
   
  const email = singInForm['login-email'].value;
  const password = singInForm['login-pass'].value;  

  try {
      //  validar si un usuario ya esta registrado (inicio de secion)
      const userCredentials = await signInWithEmailAndPassword(auth, email, password)
      console.log(userCredentials)
      window.open("/vistas/unidades.html","unidades")
      // Close the login modal
     const modal = bootstrap.Modal.getInstance(document.querySelector('#signinModal'));
      modal.hide();
  
      // reset the form
      //signInForm.reset();
  
      // show welcome message
      showMessage("Welcome" + userCredentials.user.email);
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        showMessage("Wrong password", "error")
      } else if (error.code === 'auth/user-not-found') {
        showMessage("User not found", "error")
      } else {
        showMessage("Something went wrong", "error")
      }
    }
})