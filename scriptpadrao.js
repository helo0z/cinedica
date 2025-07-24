document.addEventListener('DOMContentLoaded', function () {
  const btnTema = document.getElementById('btn-tema');
  const container = document.getElementById('container');

  btnTema.addEventListener('click', () => {
    if (container.classList.contains('tema-claro')) {
      container.classList.remove('tema-claro');
      container.classList.add('tema-escuro');
    } else {
      container.classList.remove('tema-escuro');
      container.classList.add('tema-claro');
    }
  });
});
