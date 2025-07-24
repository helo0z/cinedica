const btnTema = document.getElementById('btn-tema');
const container = document.getElementById('container');

btnTema.addEventListener('click', () => {
  container.classList.toggle('tema-claro');
  container.classList.toggle('tema-escuro');
});
