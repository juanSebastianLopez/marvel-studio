function sumar(accion = "suma") {
    console.log(accion);

    var totalActual = localStorage.getItem('totales');
    if (!totalActual) {
        totalActual = 0;
    }

    var sumasActual = 0;
    var restasActual = 0;

    if (accion == "suma") {
        var sumasActual = localStorage.getItem('sumas');
        if (!sumasActual) {
            sumasActual = 0;
        }
        sumasActual = parseInt(sumasActual)+1;
        localStorage.setItem('sumas', sumasActual);
    } else if (accion == "resta") {
        var restasActual = localStorage.getItem('restas');
        if (!restasActual) {
            restasActual = 0;
        }
        restasActual = parseInt(restasActual)+1;
        localStorage.setItem('restas', restasActual);
    }

    var totalActual = parseInt(totalActual)+1;
    
    

    localStorage.setItem('totales', totalActual);
    
    



    console.log(totalActual);


}