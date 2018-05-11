//Variable contador para cargar diferentes json
var i;
i=1;

//Empezar una vez esté la página lista
$(document).ready(function(){

	
//Evento de llegada al final de la página que ejecuta append con codigo html
$( window ).scroll(function(){
      if($(window).scrollTop() + $(window).height() == $( document ).height()) //Comprobar que es el final de la página
	  		{ //función que se ejecuta (leer json y añadir html)
            {$.getJSON('https://cdn.rawgit.com/mfers29/proyectoFinal/afdba6f1/data/'+i+'.json',function(noticias) //carga i.json
	
		{
		$('#noticias').append(
			
			'<div class="row">'+
				'<div class="col-md-8">'+
					'<h3>'+noticias.contenido[0].title+'</h3>'+ //cambia el valor por el elemento del json que corresponde.
					'<p>'+noticias.contenido[0].description+'</p>'+
				'</div>'+
				'<div class="col-md-4">'+
					 '<img src="./'+noticias.contenido[0].imgbig+'" alt="#" class="img-responsive">' +
				'</div>'+
			'</div>'+
			
			'<div class="row">'+
				'<div class="col-md-4">'+
					 '<img src="./'+noticias.contenido[1].imgbig+'" alt="#" class="img-responsive">' +
				'</div>'+
				'<div class="col-md-8">'+
					'<h3>'+noticias.contenido[1].title+'</h3>'+
					'<p>'+noticias.contenido[1].description+'</p>'+
				'</div>'+
			'</div>'+
			
			'<div class="row">'+
				'<div class="col-md-8">'+
					'<h3>'+noticias.contenido[2].title+'</h3>'+
					'<p>'+noticias.contenido[2].description+'</p>'+
				'</div>'+
				'<div class="col-md-4">'+
					 '<img src="./'+noticias.contenido[2].imgbig+'" alt="#" class="img-responsive">' +
				'</div>'+
			'</div>'  
								);
		}
		
				);
	i++;} //añade uno al valor de i para que carge el siguiente fichero 2.json
      		}
          						});
								
//Evento de hacer click el boton
$( "#botonCargar" ).click(function()

	{$.getJSON('https://cdn.rawgit.com/mfers29/proyectoFinal/afdba6f1/data/'+i+'.json',function(noticias)
	
		{
		$('#noticias').append(
			
			'<div class="row">'+
				'<div class="col-md-8">'+
					'<h3>'+noticias.contenido[0].title+'</h3>'+
					'<p>'+noticias.contenido[0].description+'</p>'+
				'</div>'+
				'<div class="col-md-4">'+
					 '<img src="./'+noticias.contenido[0].imgbig+'" alt="#" class="img-responsive">' +
				'</div>'+
			'</div>'+
			
			'<div class="row">'+
				'<div class="col-md-4">'+
					 '<img src="./'+noticias.contenido[1].imgbig+'" alt="#" class="img-responsive">' +
				'</div>'+
				'<div class="col-md-8">'+
					'<h3>'+noticias.contenido[1].title+'</h3>'+
					'<p>'+noticias.contenido[1].description+'</p>'+
				'</div>'+
			'</div>'+
			
			'<div class="row">'+
				'<div class="col-md-8">'+
					'<h3>'+noticias.contenido[2].title+'</h3>'+
					'<p>'+noticias.contenido[2].description+'</p>'+
				'</div>'+
				'<div class="col-md-4">'+
					 '<img src="./'+noticias.contenido[2].imgbig+'" alt="#" class="img-responsive">' +
				'</div>'+
			'</div>'  
								);
		}
		
				);
	i++;}
						);
 

	
	}); //Cierre de la función de document.ready
