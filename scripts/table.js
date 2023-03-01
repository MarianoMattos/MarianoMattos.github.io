function saveMessage() {
    alert("Mensaje enviado correctamente");
    var tableRow = document.getElementById("tablaDeMensajes");
    var row = tableRow.insertRow(1);
    var cellFecha = row.insertCell(0);
    var cellNombre = row.insertCell(1);
    var cellEMail = row.insertCell(2);
    var cellSubject = row.insertCell(3);

    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    const formattedToday = dd + '/' + mm + '/' + yyyy;
    cellFecha.innerHTML = formattedToday;
    cellNombre.innerHTML = document.getElementById("fnombre").value;
    cellEMail.innerHTML = document.getElementById("femail").value;
    cellSubject.innerHTML = document.getElementById("fsubject").value;
}

var form = document.getElementById("formularioContacto");

function submitForm(event) {

    //Preventing page refresh
    event.preventDefault();
}

form.addEventListener('submit', submitForm);
