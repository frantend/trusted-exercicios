const botao = document.querySelector('button');
const p = document.querySelector('p');

botao.addEventListener('click', () => {
  p.innerHTML = Math.floor(Math.random() * 10) + 1;
})