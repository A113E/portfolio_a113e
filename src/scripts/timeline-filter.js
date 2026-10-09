// src/scripts/timeline-filter.js
// Filtro de la línea de tiempo de la página "Sobre mí".

export function initTimelineFilter() {
  if (typeof document === 'undefined') return;

  const buttons = document.querySelectorAll('.filter');
  const items = document.querySelectorAll('.tl-item');

  if (!buttons.length || !items.length) return;

  function applyFilter(filter) {
    items.forEach((item) => {
      const tipo = item.getAttribute('data-tipo');
      const dim = filter !== 'todo' && tipo !== filter;
      item.setAttribute('data-dimmed', String(dim));
    });
  }

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filter = btn.getAttribute('data-filter') || 'todo';
      applyFilter(filter);
    });
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTimelineFilter);
  } else {
    initTimelineFilter();
  }
}