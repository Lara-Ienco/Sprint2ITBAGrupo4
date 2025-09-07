function renderProductoDetalle() {
  const hash = window.location.hash;
  const queryString = hash.split('?')[1] || '';
  const params = new URLSearchParams(queryString);
  const id = parseInt(params.get("id"));

  const producto = productos.find(p => p.id === id);

  if (!producto) {
    document.querySelector("main").innerHTML = "<h2>Producto no encontrado</h2>";
    return;
  }

  document.title = producto.nombre + " - Hermanos Jota";
  document.getElementById("nombre").innerText = producto.nombre;
  document.getElementById("descripcion").innerText = producto.descripcion;
  document.getElementById("medidas").innerText = producto.medidas;
  document.getElementById("materiales").innerText = producto.materiales;
  document.getElementById("acabado").innerText = producto.acabado;
  document.getElementById("extra").innerText = producto.extra;
  document.getElementById("precio").innerText = "$" + producto.precio.toLocaleString();
  document.getElementById("imagen").src = "../" + producto.imagen;
  document.getElementById("imagen").alt = producto.nombre;
}
