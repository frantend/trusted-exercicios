const lampada = document.querySelector('img');

lampada.addEventListener('click', () => {
  if (lampada.src.includes("OFFLampada.jpg")) {
    return lampada.src = './ONLampada.jpg'
  }
  return lampada.src = './OFFLampada.jpg';
});