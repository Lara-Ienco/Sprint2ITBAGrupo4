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