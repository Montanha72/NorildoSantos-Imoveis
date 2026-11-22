document.querySelectorAll('.ver-senha').forEach(botao => {
  const campo = botao.closest('.campo')?.querySelector('input[type="password"]');
  if (!campo) return;

  botao.addEventListener('click', () => {
    const mostrar = campo.type === 'password';
    campo.type = mostrar ? 'text' : 'password';
    botao.querySelector('.icone').textContent = mostrar ? 'visibility' : 'visibility_off';
    botao.setAttribute('aria-label', mostrar ? 'Ocultar senha' : 'Mostrar senha');
  });
});

document.querySelector('form[data-redirect]')?.addEventListener('submit', evento => {
  evento.preventDefault();
  location.href = evento.currentTarget.dataset.redirect;
});
