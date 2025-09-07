const app = document.getElementById('app');

function loadPage(url) {
  return fetch(url)
    .then(res => {
      if (!res.ok) throw new Error('No encontrado');
      return res.text();
    })
    .then(html => {
      app.innerHTML = html;
    });
}

async function router() {
  const hash = location.hash.slice(1) || '/';

  if (hash === '/') {
    await loadPage('home.html');
    if (typeof initCarousel === 'function') initCarousel();
  } else if (hash === '/catalogo') {
    await loadPage('catalogo/catalogo.html');
    if (typeof renderCatalogo === 'function') renderCatalogo();
  } else if (hash.startsWith('/producto')) {
    await loadPage('producto/producto.html');
    if (typeof renderProductoDetalle === 'function') renderProductoDetalle();
  } else if (hash === '/contacto') {
    await loadPage('contacto/contacto.html');
    if (typeof initContacto === 'function') initContacto();
  } else {
    app.innerHTML = '<h1>404 - Página no encontrada</h1>';
  }
}



window.addEventListener('hashchange', router);
window.addEventListener('load', router);
