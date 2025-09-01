<<<<<<< HEAD
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
=======
const productos = [
    { nombre: "Silla Moderna", precio: "$3.200", imagen: "imagenes/sillas Cordoba.png" },
    { nombre: "Mesa Comedor", precio: "$7.500", imagen: "imagenes/Mesa Comedor Pampa.png" },
    { nombre: "Aparador Uspallata", precio: "$1.800", imagen: "imagenes/Aparador Uspallata.png" },
    { nombre: "Escritorio", precio: "$4.300", imagen: "imagenes/Escritorio Costa.png" }
];

const contenedor = document.querySelector(".productos");

productos.forEach(p => {
    const div = document.createElement("div");
    div.className = "producto";
    div.innerHTML = `
        <img src="${p.imagen}" alt="${p.nombre}" style="width:100%; border-radius:5px;">
        <h3>${p.nombre}</h3>
        <p>${p.precio}</p>
    `;
    contenedor.appendChild(div);
});
>>>>>>> 25b4b3688121b1aa197395c9e78310d05622d9ae
