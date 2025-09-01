const destacados = [
  { id: 1, nombre: "Sillon cuerina marrón", precio: 50000, imagen: "imagenes/sillon_destacado1.png"},
  { id: 2, nombre: "bla bla bla", precio: 50000, imagen: "imagenes/sillon_destacado1.png" },
  { id: 3, nombre: "bla bla bla", precio: 50000, imagen: "imagenes/sillon_destacado1.png" }
];

const contenedor_destacados = document.getElementById("productos-destacados");
destacados.forEach(prod => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <img src="${prod.imagen}" alt="${prod.nombre}">
    <h3>${prod.nombre}</h3>
    <p>$${prod.precio}</p>
    <a href="catalogo/producto${prod.id}.html">Ver más</a>
`;
  contenedor_destacados.appendChild(card);
});
