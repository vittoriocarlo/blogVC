//Obtenemos los ID 

let botonBurguer = document.getElementById('button-nav');
let navegacion = document.querySelector('.navegacion');

//Llamamos al evento click

botonBurguer.addEventListener('click', function() {
  //console.log(botonBurguer);


  //Condicion para validar si existe la clase 'activo'
  if(navegacion.classList.contains('activo')){
    navegacion.classList.remove('activo');
  } else {
    navegacion.classList.add('activo');
  }
  
})

//Agregando el estilo con Js
botonBurguer.style.cssText = "transition: .5s all ease; left: 0";

function dataSet() {
  this.navegacion = navegacion;
  this.botonBurguer = botonBurguer;
}




