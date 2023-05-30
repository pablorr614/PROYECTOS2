const loggedOutLink = document.querySelectorAll('.logged-out')
const loggedInLink = document.querySelectorAll('.logged-in')

export const loginCheck = user =>{
    if(user){
      window.open("/vistas/unidades.html","unidades")
    }else{
      console.log("logeado")
    }
 }