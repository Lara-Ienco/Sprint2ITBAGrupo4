
function initContacto() {
  const formulario = document.getElementById("formularioDeContacto");
const estado = document.getElementById("estado");
  function mandoElFormulario(event) {

  event.preventDefault();

  const name = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("message").value;
  const elEmailEsValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !mensaje) {
    estado.textContent = "Por favor, complete todos los campos";
    estado.className = "error";
    return;
  }
  if (!elEmailEsValido.test(email)) {
    estado.textContent = "Email inválido.";
    estado.className = "error";
    return;
  }

  estado.textContent = "Enviado...";
  estado.className = "ok";
}

formulario.addEventListener("submit", mandoElFormulario);
}
