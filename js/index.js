//Arrancamos el controlador

$.controller.init("#panel_inicio")

/**
 * Codigo para hacer que se cierre solo el menu al pulsar sobre el 
 */

 $('.navbar-nav li a').on('click', function(){
     if(!$(this).hasClass('dropdown-toogle')){
         $('navbar-collapse').collapse('hide');
     }
 });