const destacados = [
  { id: 1, nombre: "Sillas Cordoba", precio: 50000, imagen: "imagenes/Sillas Cordoba.png"},
  { id: 2, nombre: "Silla de Trabajo Belgrano", precio: 50000, imagen: "imagenes/Silla de Trabajo Belgrano.png" },
  { id: 3, nombre: "Mesa de Centro Araucaria", precio: 50000, imagen: "imagenes/Mesa de Centro Araucaria.png" }
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

