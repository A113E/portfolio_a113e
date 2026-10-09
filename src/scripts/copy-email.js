// src/scripts/copy-email.js
// Copia el email al portapapeles y muestra feedback visual.

export function initCopyEmail() {
  if (typeof document === 'undefined') return;

  const btn = document.querySelector('[data-copy-email]');
  if (!btn) return;

  const email = btn.getAttribute('data-copy-email');
  if (!email) return;

  const originalLabel = btn.querySelector('.copy-label')?.textContent ?? 'Copiar';

  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(email);
      showFeedback(btn, originalLabel, '¡Copiado!', true);
    } catch {
      // Fallback para navegadores antiguos o contextos no seguros.
      const ta = document.createElement('textarea');
      ta.value = email;
      ta.setAttribute('readonly', '');
      ta.style.position = 'absolute';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
        showFeedback(btn, originalLabel, '¡Copiado!', true);
      } catch {
        showFeedback(btn, originalLabel, 'Error al copiar', false);
      }
      document.body.removeChild(ta);
    }
  });
}

function showFeedback(btn, originalLabel, message, ok) {
  btn.classList.add(ok ? 'is-copied' : 'is-error');
  const label = btn.querySelector('.copy-label');
  if (label) label.textContent = message;

  setTimeout(() => {
    btn.classList.remove('is-copied', 'is-error');
    if (label) label.textContent = originalLabel;
  }, 1800);
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCopyEmail);
  } else {
    initCopyEmail();
  }
}