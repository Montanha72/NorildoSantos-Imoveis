document.querySelectorAll('form').forEach(f => f.addEventListener('submit', e => {
    e.preventDefault();
    alert('Mensagem enviada!');
}));
