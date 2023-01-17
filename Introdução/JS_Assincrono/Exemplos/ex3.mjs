import fetch from "node-fetch";

fetch('https://api.goprogram.ai/inspiration',
  {
    quote: 'Alguma frase inspiradora',
    author: 'Pessoa autora da frase'
  })
  .then((response) => response.json()
    .then((frase) => console.log(`"${frase.quote}" | ${frase.author}`)))
  .catch((error) => console.log('Erro ao fazer a requisição.', error.message));
// usar os 2 'then' depois do 'fetch' é um processo chamado de 'encadeamento'