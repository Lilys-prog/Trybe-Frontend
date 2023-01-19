import fetch from 'node-fetch';

const cepValue = document.querySelector('#cep');
const btn = document.querySelector('#consCEP');
const endDados = document.querySelector('#result');


// ESTÁ IGUAL AO SITE, MAS NÃO ESTÁ FUNCIONANDO (TEM QUE USAR O SIITE STACKBLITZ - JS)
// const cep = '30130-010'; 
// fetch(`https://viacep.com.br/ws/${cep}/json/`)
//   .then(response => response.json())
//   .then(data => console.log(data));

// =============================================================

// ASYNC/AWAIT

const fetchCep = async (cep) => {
  cep = cepValue.value;

  try {
    const api = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await api.json();
    endDados.innerHTML = JSON.stringify(data);

  } catch (error) {
    return error.message;
  }
}

btn.addEventListener('click', (() => fetchCep));