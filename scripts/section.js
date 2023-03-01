function scrollSection(detalle, boton) {    
    if(document.getElementById(boton).innerHTML != "... ver menos"){
        document.getElementById(detalle).style.overflow = "visible";
        document.getElementById(detalle).style.whiteSpace = "normal";
        document.getElementById(boton).innerHTML = "... ver menos"
    }
    else{
        document.getElementById(detalle).style.overflow = "hidden";
        document.getElementById(detalle).style.whiteSpace = "nowrap";
        document.getElementById(boton).innerHTML = "... ver más"
    }
}