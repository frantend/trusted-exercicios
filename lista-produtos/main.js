const arrayProdutos = [
  produto1 = {
    nome: 'Notebook Acer',
    categoria: 'Computadores e Informática',
    preco: 'R$ 2.234,87',
  },
  produto2 = {
    nome: 'Lavadora Brastemp',
    categoria: 'Eletrodoméstico',
    preco: 'R$ 3.234,87',
  },
  produto3 = {
    nome: 'Iphone 7 Plus',
    categoria: 'Celulares e Comunicação',
    preco: 'R$ 5.999,89',
  }
];

const div = document.querySelector('div');

arrayProdutos.forEach((produto) => {
  const nome = document.createElement('h2');
  const categoria = document.createElement('p');
  const preco = document.createElement('h3');
  nome.innerHTML = produto.nome;
  categoria.innerHTML = produto.categoria;
  preco.innerHTML = produto.preco;

  div.append(nome, categoria, preco)
})