const email = document.getElementById("correo-electronico");
const telefono = document.getElementById("tel-num");
const actividad = document.querySelector(".form-select");
const btnEnviar = document.querySelector(".btn-enviar");
const mostrarClientes = document.querySelector(".t-body");

let listaClientes = [];


btnEnviar.addEventListener('click',()=> {
    listaClientes = [];
    let cliente = `
    <tr>
        <th scope="row">1</th>
        <td>${email.value}</td>
        <td>${telefono.value}</td>
        <td>@${actividad.value}</td>
    </tr>
    `
    listaClientes.push(cliente)
    renderLista()
})

function renderLista () {
    listaClientes.forEach(item => {
        mostrarClientes.innerHTML += item;
    })
}