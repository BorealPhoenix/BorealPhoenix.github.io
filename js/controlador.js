// fichero js/controlador.js
/**
 * Biblioteca "casera" para hacer el "binding" del
 * os menús con las diferentes vistas de la APP.
 * Para usarla, basta con poner el mismo id a la entrada 
 * del menú que a su vista asociada, pero cambiando el prefijo, 
 * el el menú debe ser menu_AAA y en la vista panel_AAA.
 */
$.controller = {};

/**
 * Esta función gestiona qué panel está activo en cada momento (sólo puede
 * haber uno) Cambia de panel
 * @param {type} panel_name el nombre del panel a activar
 */
$.controller.activate = function (panel_name) {
    // console.log("cambio old::"+$.controller.active_panel+" new::"+panel_name);

    //El hide("slow", "swing"); y el show("fast", "swing"); son efectos de JQuery
    $($.controller.active_panel).hide("slow", "swing");
    $(panel_name).show("fast", "swing");
    $.controller.active_panel = panel_name;
};

//Atributos del objeto
//Estte atributo cobntiene el panel activo en cada momeno
$.controller.active_panel = "";
//este atributo contiene el panel inicial de poder consultarlo en cualquier momento
$.controller.panel_inicial = "";

/**
 * Función para crear todos los "onClick" de los menús y
 * asociarlos con cada panel correspondiente.
 * @param {type} panel_inicial- el panerl a mostrar al arrancar la APP
 */
$.controller.init = function (panel_inicial) {
    //   console.log("Panel inicial="+panel_inicial);
    $('[id^="menu_"]').each(function () {
        var $this = $(this);
        var menu_id = $this.attr('id');
        var panel_id = menu_id.replace('menu_', 'panel_');

        $("#" + menu_id).click(function () {
            $.controller.activate("#" + panel_id);
        });
        // console.log("id_menu::" + menu_id + "  id_panel" + panel_id);
    });
    $("div.panel").hide();
    $(panel_inicial).show();
    $.controller.active_panel = panel_inicial;
    $.controller.panel_inicial = panel_inicial;

}
/**
 * Esta funcion nos llevara al panel inicial. Oculta el panel activo
 * en ese momento y muestra solo el panel inicial que se indico en $.controller.init()
 */
$.controller.index = function () {
    $.controller.activate = this.panel_inicial;
}