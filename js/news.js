//Variable contador para cargar diferentes json
var i;
i=1;

//Empezar una vez esté la página lista
$(document).ready(function(){

//ocultamos el div
//$("#plantilla").hide();
	
//Evento de llegada al final de la página 
//$( window ).scroll(function(){
//      if($(window).scrollTop() + $(window).height() == $( document ).height()) {
//            alert("Has llegado al final de la página");
//      }
//          						});
								
//Evento de hacer click el boton
$( "#botonCargar" ).click(function(){alert("Prueba click")});

$.getJSON('https://rawgit.com/mfers29/proyectoFinal/master/js/prueba.json',function(noticias){alert(noticias.contenido[1].titulo)});
 
   
	
	}); //Cierre de la función de document.ready
