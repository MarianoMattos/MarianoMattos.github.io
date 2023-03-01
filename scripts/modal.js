function loadModal() {
    if (!localStorage.Usuario) {
        var myModal = new bootstrap.Modal(document.getElementById('myModal'))
        myModal.show();
    }
    else{
        document.getElementById("usuario").innerHTML = "Bienvenido " + localStorage.getItem("Usuario");
    }
}
function guardarNombre() {
    let nombre = document.getElementById("nombre").value;
    localStorage.setItem("Usuario", nombre);
    document.getElementById("usuario").innerHTML = "Bienvenido " + localStorage.getItem("Usuario");
}

function noGuardarNombre() {
}
