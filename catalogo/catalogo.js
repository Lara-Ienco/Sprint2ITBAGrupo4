function renderCatalogo() {
  const contenedor = document.getElementById("lista-productos");
  if (!contenedor) return;

  contenedor.innerHTML = "";

  productos.forEach(prod => {
    const card = document.createElement("article");
    card.classList.add("card");
    card.innerHTML = `
      <a href="#/producto?id=${prod.id}">
        <img src="../${prod.imagen}" alt="${prod.nombre}">
        <h2>${prod.nombre}</h2>
        <p>$${prod.precio.toLocaleString()}</p>
      </a>
    `;
    contenedor.appendChild(card);
  });
}
