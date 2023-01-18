import "./style.css"

const coin = document.querySelector('#coin');
const btn = document.querySelector('#convBtn');
const conversion = document.querySelector('#conversion');

const auxConv = (from, to) => {
  from = coin;
  to = conversion;
};

const conv = () => {
  fetch('https://api.exchangerate.host/latest?base=${moeda}')
    .then((response) => response.json())
    .then((dados) => {
      conversion.innerHTML = dados;
    })
};

btn.addEventListener('click', conv);