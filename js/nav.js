(() => {
  const header = document.querySelector('.cabecalho, .site-header');
  const toggle = header?.querySelector('.menu-toggle');
  const menu = header?.querySelector('nav');
  if (!header || !toggle || !menu) return;
  const setOpen = (open) => {
    header.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  };
  toggle.addEventListener('click', () => setOpen(!header.classList.contains('is-open')));
  menu.addEventListener('click', (event) => { if (event.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') setOpen(false); });
  const breakpoint = header.classList.contains('cabecalho') ? 768 : 861;
  window.matchMedia(`(min-width: ${breakpoint}px)`).addEventListener('change', (event) => { if (event.matches) setOpen(false); });
})();
