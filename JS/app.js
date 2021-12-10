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



//Obetenemos el valor por selector
let animado = document.querySelectorAll('.animadoScroll');

  function scroll() {
    //Calculamos la altura
    let altura = document.documentElement.scrollTop;

    //Recorremos la cantidad de elementos que contiene
    for(let i = 0; i < animado.length; i++) {
      let efectoAnimado = animado[i].offsetTop;

      if(efectoAnimado - 400 < altura) {
        animado[i].classList.add('mostrar');
      }
    }
  }

  //Llamamos al evento scroll
  window.addEventListener('scroll', scroll);


//Efecto texto

let efecto = new Typed('.efectoTexto', {
  strings: ['<i class="typedEfect">Tecnología</i>',
            '<i class="typedEfect">Diseño</i>',
            '<i class="typedEfect">Programación</i>',
            '<i class="typedEfect">Redes</i>'],


  typeSpeed: 45,
  startDelay: 300,
  backSpeed: 45,
  smartBackspace: true,
  shuffle: true,
  backDelay: 1500,
  loop: true,
  loopCount: false,
  showCursor: true,
  cursorChar: '|',
  contentType: 'html'
});





