//import './style.css';

const coin = document.querySelector('#coin');  // input
const btn = document.querySelector('#convBtn');
//const conversion = document.querySelector('#conversion'); // lista de conversão


function conv(coin) {
  const endPoint = `https://api.exchangerate.host/latest?base=${coin}`;

  return fetch(endPoint)
    .then((response) => response.json())
    .then((dados) => dados)
    .catch((error) => console.log(error.message));
}

function renderCoins(coins) {  
  const ul = document.querySelector('#coins');

  ul.innerHTML = '';           // para limpar a cada vez que se pesquisar moeda nova

  coins.forEach(([coin, valueCoin]) => {            // desestruturação de array
    const li = document.createElement('li');
    li.innerText = `${coin} ${valueCoin}`;
    ul.appendChild(li);
  });
}


function handleSearch() {
  const titleCoins = document.querySelector('#titleCoins');
  titleCoins.innerText = `Valor referente a 1 ${coin.value}`;

  conv(coin.value).then(({ rates }) => {
    const coins = Object.entries(rates);
    renderCoins(coins);
    // console.log(dados.rates);   mostra o objeto que contém todas as conversões (sem desestruturar)
    // console.log(Object.entries(dados.rates));   retorna um array de arrays, cada um com 2 elementos, a chave e o valor (sem desestruturar)
  });
}
// retorna um objeto, queremos um array para renderizar no html. Função acima vai ser feita para retornar um array.

btn.addEventListener('click', handleSearch);