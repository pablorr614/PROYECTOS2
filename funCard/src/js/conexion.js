
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getFirestore,collection, addDoc,  getDocs } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { getAuth} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCChwOQ8IlB6hv17L3TLQLUToZx1laWxYE",
  authDomain: "funcards-js.firebaseapp.com",
  projectId: "funcards-js",
  storageBucket: "funcards-js.appspot.com",
  messagingSenderId: "655102879736",
  appId: "1:655102879736:web:a784b55229e31ac10bd80d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const auth = getAuth(app)


/**
 * Metodo de Usuario crud
 */
/**
 * 
 * @param {*} nombre 
 * @param {*} apellido 
 * @param {*} email 
 * @param {*} pass 
 * @returns 
 */

// añadir usuarios a la bd 
export const guardarUsuario =  (nombre, apellido,email,pass) => {
  addDoc(collection(db,'usuarios'),{nombre, apellido,email,pass});
}
  

//export const listaUsu = () => getDocs(collection(db, 'usuarios'))

//export const listaPalabras = () => getDocs(collection(db, 'palabras'))