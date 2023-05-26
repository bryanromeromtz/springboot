// Call the dataTables jQuery plugin
$(document).ready(function() {
    cargarUsuarios();
  $('#usuarios').DataTable();
});


const cargarUsuarios = () => {
    fetch("usuarios")
      .then(response => response.json())
      .then(data => {
        const tablaUsuarios = document.getElementById("usuarios");
                let html = "";
                data.forEach(usuario => {
                    html += `<tr>
                                <td>${usuario.id}</td>
                                <td>${usuario.nombre}</td>
                                <td>${usuario.telefono}</td>
                                <td>${usuario.email}</td>
                                <td>
                                    <a href="#" class="btn btn-danger btn-circle btn-sm">
                                        <i class="fas fa-trash"></i>
                                    </a>
                                </td>
                            </tr>`;
                });
                tablaUsuarios.innerHTML = html;
      });
}