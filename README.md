## Proyecto Final L.M 17/18  

**Primero he dibujado en el cuaderno la maquetación de las dos plantillas que requiere la tarea.  
La maquetación de la plantilla _news.html_ es la siguiente:  **

![Diseño de news.html](/img_readme/news_html_design.JPG)  

**El esquema de contenedores de la plantilla _news.html_ es el siguiente:  **

![Esquema 1 de news.html](/img_readme/news_html_schema1.JPG)
![Esquema 2 de news.html](/img_readme/news_html_schema2.JPG)  

**La maquetación de la plantilla de una sola noticia, _newsX.html_ es la siguiente:  **

![Diseño de news1.html](/img_readme/news_1_design.JPG)  

**El esquema de contenedores de la plantilla _newsX.html_ es el siguiente:  **

![Esquema 1 de news1.html](/img_readme/news_1_schema1.JPG)
![Esquema 2 de news1.html](/img_readme/news_1_schema2.JPG)  


Se han creado dos ficheros json (1.json y 2.json) con los datos requeridos para cada noticia:  

* title
* imgbig
* imgmid (no se ha utilizado porque no se han cambiado las imágenes para carga en móvil)
* description
* datetime  

Con jQuery se ha codificado un programa que lee cada fichero json y carga los datos que tiene sobre las noticias en la web principal, al final de las que ya incluye la página por defecto.

_NOTA: Utilizando _news.html_ desde RAWGIT, con Firefox, no carga el primer bloque de noticias con el evento de llegar al final de la pantalla, sólo con el botón. Una vez cargado el primero, el segundo si lo carga con el evento de llegar al fin de la pantalla.
Con Safari y Chrome funciona perfectamente._  

Al final de la página se ha colocado un enlace al fichero rss.xml así como el meta necesario en la cabecera.

En cada página se han incluido las etiquetas meta con OpenGraph para compartir en FaceBook:  
* Descripción
* Imágen
* Nombre de la aplicación
* Url de la página


  








