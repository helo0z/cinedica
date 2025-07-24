const btnTema = document.getElementById('btn-tema');
const container = document.getElementById('container');
const logo = document.querySelector('header .logo');

const logoClaro = 'logocinedica.png';
const logoEscuro = 'logocinedica-escuro.png';

btnTema.addEventListener('click', () => {
  const claro = container.classList.contains('tema-claro');
  container.classList.toggle('tema-claro', !claro);
  container.classList.toggle('tema-escuro', claro);
  logo.src = claro ? logoEscuro : logoClaro;
});
