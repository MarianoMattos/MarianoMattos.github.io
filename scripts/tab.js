function toogleTab(tabValue) {
    if(tabValue === 'mensajes enviados'){
        document.getElementById('formularioContacto').style.display = "block";
        document.getElementById('mensajesEnviados').style.display = "none";
    }
    else if (tabValue === 'formulario de contacto'){
        document.getElementById('formularioContacto').style.display = "none";
        document.getElementById('mensajesEnviados').style.display = "block";
    }
}