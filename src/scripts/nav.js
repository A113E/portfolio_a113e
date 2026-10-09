// src/scripts/nav.js
// Lógica del menú de navegación responsive.
// Se carga solo en el cliente, nunca en el servidor:
// el import se hace desde un <script> del componente Nav.astro,
// no desde el frontmatter.

export function initNav() {
  // Guard: si no estamos en un navegador, salir.
  if (typeof document === 'undefined') return;

  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  // Guard clause: si el componente no está en la página, no hacemos nada.
  if (!toggle || !links) return;

  // Abrir / cerrar menú móvil.
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  // Cierra el menú al hacer click en un enlace (útil en móvil).
  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Cierra el menú al pulsar Escape (accesibilidad).
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && links.classList.contains('open')) {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });
}

// Auto-inicialización solo si estamos en el navegador.
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNav);
  } else {
    initNav();
  }
}