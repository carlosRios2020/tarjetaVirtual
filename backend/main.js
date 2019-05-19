'use strict'
var email,password,correo,constraseña,datos;
var form = document.querySelector('.form-signin');


form.addEventListener('submit', function(){
  console.log("evento capturado");
 var datos;
 var email = document.querySelector('#inputEmail').value;
 var password = parseInt(document.querySelector('#inputPassword').value);  

 alert("bienvenido" +email);
 });

 
for(var i in datos){
    console.log(datos[i]);
}




