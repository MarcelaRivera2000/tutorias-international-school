const nombre = document.getElementById('input-nombre');
const email = document.getElementById('input-email');
const fechas = document.getElementById('input-fecha');
const dia = document.getElementById('input-select-dia');
const bttnEnviar = document.getElementById('bttn-enviar');
const lista = document.getElementById('lista');
let valores = [];

for (let i = 0; i < valores.length; i++) {
    const textoString = valores[i];
    const nuevoElemento = document.createElement('div');
    nuevoElemento.innerText = textoString;
    lista.appendChild(nuevoElemento);
}

bttnEnviar.addEventListener('click', function () {
    if (nombre.value != "" && validar() && email.value != "" && fechas.value != null) {
        let horario="";
        if (dia.checked) {
            horario = "Dia";
        }else{
            horario = "Noche";
        }
        const textoString = "Nombre: " + nombre.value + "\nEmail: " + email.value + "\nHorario: " + horario + "\nFecha: " + fechas.value + "\n****************\n";
        const nuevoElemento = document.createElement('div');
        nuevoElemento.innerText = textoString;
        lista.appendChild(nuevoElemento);
        alert('Inscripcion Enviada Exitosamente');
    } else {
        alert('Rellene los campos requeridos');
    }
    dia.checked = true;
    nombre.value = "";
    email.value = "";
    fechas.value = null;
});

function validar() {
    if (!nombre.checkValidity()) {
        alert('No puede ingresar numeros en la categoria nombre');
        return false;
    } else {
        return true;
    }
}