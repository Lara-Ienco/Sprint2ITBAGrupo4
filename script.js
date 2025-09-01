// Carousel

const productos = [
  { id: 1, nombre: "blaa", precio: 12000, imagen: "imagenes/Escritorio Costa.png" },
  { id: 2, nombre: "blaa", precio: 45000, imagen: "imagenes/Sofá Patagonia.png" },
  { id: 3, nombre: "blaa", precio: 28000, imagen: "imagenes/Butaca Mendoza.png" },
  { id: 4, nombre: "blaa", precio: 60000, imagen: "imagenes/Mesa Comedor Pampa.png" },
  { id: 5, nombre: "blaa", precio: 15000, imagen: "imagenes/Mesa de Centro Araucaria.png" },
  { id: 6, nombre: "blaa", precio: 35000, imagen: "imagenes/sillon_destacado1.png" },
  { id: 7, nombre: "blaa", precio: 9000, imagen: "imagenes/Aparador Uspallata.png" },
  { id: 8, nombre: "blaa", precio: 75000, imagen: "imagenes/Biblioteca Recoleta.png"}
];
const track   = document.getElementById("productos-destacados"); // contenedor de cards
const prevBtn = document.querySelector(".carousel-btn.prev"); // botón anterior
const nextBtn = document.querySelector(".carousel-btn.next"); // botón siguiente

// renderizar productos
productos.forEach(p => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${p.imagen}" alt="${p.nombre}">
    <h3>${p.nombre}</h3>
    <p>$${p.precio}</p>
    <a href="catalogo/producto${p.id}.html">Ver más</a>
  `;
  track.appendChild(card);
});

let currentIndex = 0;

// cuántos items entran por pantalla -> VER PQ ESTO NO ESTA ANDANDO EN LOS PRIMEROS 3 !!!
function itemsPerPage(){
  if (window.matchMedia("(max-width:600px)").matches) return 1; // telefono
  if (window.matchMedia("(max-width:900px)").matches) return 2; // tablet
  if (window.matchMedia("(max-width:1200px)").matches) return 3; // desktop pequeño
  return 4;
}

function totalPages(){ // cuántas "páginas" de items hay
  return Math.ceil(track.children.length / itemsPerPage()); // redondeo para arriba
}

function updateButtons(){ // habilita/deshabilita botones
  prevBtn.disabled = currentIndex === 0; // si estoy en la primer página
  nextBtn.disabled = currentIndex >= totalPages() - 1; // si estoy en la última página
}

function updateCarousel(){ // mueve el track
  const itemWidth = track.children[0].offsetWidth + parseInt(getComputedStyle(track).gap); // ancho de un item + gap
  const moveX = -(currentIndex * itemsPerPage() * itemWidth); // cuánto moverme
  track.style.transform = `translateX(${moveX}px)`; // muevo el track
  updateButtons(); // actualizo botones
}

nextBtn.addEventListener("click", () => { 
  if (currentIndex < totalPages() - 1){ // si no estoy en la última página
    currentIndex++; // avanzo una página
    updateCarousel(); // actualizo el carrusel
  }
});

prevBtn.addEventListener("click", () => { 
  if (currentIndex > 0){ // si no estoy en la primera página
    currentIndex--; // retrocedo una página
    updateCarousel(); // actualizo el carrusel
  }
});

window.addEventListener("resize", () => { // al cambiar tamaño de ventana VER PQ NO ANDA BIEEENN
  currentIndex = Math.min(currentIndex, totalPages() - 1); // ajusto currentIndex si es necesario
  updateCarousel(); // actualizo el carrusel
});

updateCarousel(); // inicializo el carrusel 