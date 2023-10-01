const btnSomar = document.querySelector('#somar');
const btnSubtrair = document.querySelector('#subtrair');
const btnMultiplicar = document.querySelector('#multiplicar');
const btnDividir = document.querySelector('#dividir');

const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');

const h2 = document.querySelector('h2');

btnSomar.addEventListener('click', () => {
  if (input1.value && input2.value) {

    return h2.innerHTML = `Soma de ${input1.value} + ${input2.value} é igual a ${Number(input1.value) + Number(input2.value)}`;
  }
  return alert('Insira os valores');

});

btnSubtrair.addEventListener('click', () => {
  if (input1.value && input2.value) {

    return h2.innerHTML = `Subtração de ${input1.value} - ${input2.value} é igual a ${Number(input1.value) - Number(input2.value)}`;
  }
  return alert('Insira os valores');

});

btnMultiplicar.addEventListener('click', () => {
  if (input1.value && input2.value) {

    return h2.innerHTML = `Multiplicação de ${input1.value} x ${input2.value} é igual a ${Number(input1.value) * Number(input2.value)}`;
  }
  return alert('Insira os valores');

});

btnDividir.addEventListener('click', () => {
  if (input1.value && input2.value) {

    return h2.innerHTML = `Divisão de ${input1.value} ÷ ${input2.value} é igual a ${Number(input1.value) / Number(input2.value)}`;
  }
  return alert('Insira os valores');
});
