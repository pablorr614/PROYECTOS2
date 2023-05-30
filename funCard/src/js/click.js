/**
 * Variables
 * https://learn.jquery.com/using-jquery-core/document-ready/
 */
const palabras = ['HOLA', 'MUNDO', 'BIENVENIDO', 'A', 'FUNCARDS '];
var contador = 0;
const bodyUnidad = document.getElementById('unidad');
const bodyDemo = document.getElementById('demo');
var fondo = document.getElementById('fondo');


console.log(bodyDemo,bodyUnidad);
/**
 * Funciones
 */
//hablar
function decir(texto){
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto))
}
function mostrar() {
    
     var texto = document.getElementById('fondo');
     var modedas = document.getElementById('money');
     
     if (contador < palabras.length) {
        decir(palabras[contador]);
        texto.innerHTML = palabras[contador];
         
         contador++;
     } else {

        fondo.style.backgroundColor = 'transparent';
        texto.innerHTML = '<button onclick="togglePopupPlay()" class="first-button" id="reg">JUGAR</button>'; 
        modedas.innerHTML = '1';
 
 
     }
 
 }
 
 //setInterval(mostrar, 1300);



/**
 * Modales
 */
 function togglePopup() {
    document.getElementById("login-formModal").classList.toggle("active");
   }

function togglePopupR() {
    document.getElementById("signup-formModal").classList.toggle("active");
   }

   function togglePopupPlay() {
    document.getElementById("signup-form").classList.toggle("active");
   }