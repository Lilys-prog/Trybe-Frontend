import { nanoid } from 'nanoid';
import './style.css';

// o vite pega o css e 'injeta' no html automaticamente
// isso é possível de fazer exatamente por causa do ambiente de desenvolvimento que sse estabeleceu

const pssBtnEl = document.querySelector('button');
const dispPassEl = document.querySelector('h2');

pssBtnEl.addEventListener('click', () => {
  const randPass = nanoid();
  dispPassEl.innerHTML = randPass;
});


//console.log(nanoid());
/*
- essa forma funciona no node, mas ainda dá erro no navegador pq este 'não sabe' que o módulo importado está dentro do node_modules. Para 'informar' a ele usa-se um bundler, neste caso,  o vite.
*/