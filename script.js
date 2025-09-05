// Carousel

const productos = [
  { id: 1, nombre: "blaa", precio: 12000, imagen: "imagenes/Escritorio Costa.png" },
  { id: 2, nombre: "blaa", precio: 45000, imagen: "imagenes/Sofá Patagonia.png" },
  { id: 3, nombre: "blaa", precio: 28000, imagen: "imagenes/Butaca Mendoza.png" },
  { id: 4, nombre: "blaa", precio: 60000, imagen: "imagenes/Mesa Comedor Pampa.png" },
  { id: 5, nombre: "blaa", precio: 15000, imagen: "imagenes/Mesa de Centro Araucaria.png" },
  { id: 6, nombre: "blaa", precio: 35000, imagen: "imagenes/Silla Belgrano.png" },
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

// de a cuantos items va a ir mostrando. osea una vez q moves, cuantos nuevos aparecen?
function itemsPerPage(){
  if (window.matchMedia("(min-width:1201px)").matches) return 4; // desktop grande
  if (window.matchMedia("(min-width:901px)").matches)  return 3; // desktop chico
  if (window.matchMedia("(min-width:601px)").matches)  return 2; // tablet
  return 1; // móvil
}

function totalPages(){
  return Math.ceil(track.children.length / itemsPerPage());
}

function updateButtons(){
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex >= totalPages() - 1;
}

function updateCarousel(){
  if (!track.children.length) return;

  // ancho real de una card + gap actual (coincide con CSS)
  const styles = getComputedStyle(track);
  const gap = parseInt(styles.gap) || 0;
  const itemWidth = track.children[0].offsetWidth + gap;

  const moveX = -(currentIndex * itemsPerPage() * itemWidth);
  track.style.transform = `translateX(${moveX}px)`;
  updateButtons();
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < totalPages() - 1){
    currentIndex++;
    updateCarousel();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0){
    currentIndex--;
    updateCarousel();
  }
});

// recalcular al redimensionar y cuando termina de cargar todo
window.addEventListener("resize", () => {
  currentIndex = Math.min(currentIndex, totalPages() - 1);
  updateCarousel();
});
window.addEventListener("load", updateCarousel);

// inicial
updateCarousel();