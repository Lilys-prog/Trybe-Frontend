// função que gera um número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10);

// promise resolvida retornando o número aleatório
const resolvedPromise = () =>
  new Promise((resolve, reject) => {      // new Promise((resolve, reject) => {})
    setTimeout(() => {                    // setTimeout(() => {}, tempo em ms)
      const randomNumber = generateRandomNumber();
      resolve(randomNumber);
    }, 1000);
  });

resolvedPromise().then((response) => {
  console.log(`O número gerado é ${response}`);
}); //chamada encadeada
// o then tb recebe função --->>>  then(() => {}), que recebe o parâmetro response. Esse parâmetro vai receber EXATAMENTE o mesmo valor de                 >>> resolve(randomNumber)


  // console.log(resolvedPromise()); 
  // ^^^^^^^^^^^ só mostra o estado pendente e não o número resultante, pq o console.log é executado antes do timeout, q sóo vai ser feito depois de 1s. A foorma de mostrar o valor é usar o método .then

// =================================================

// promise rejeitada retornando um objeto de erro
const rejectedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      reject(new Error(`O número ${randomNumber} é inválido`));
    }, 1000);
  });

rejectedPromise()
.then((response) => {
  console.log(`O número inválido é ${response}`);
})
.catch((error) => {          // catch(() => {})
  console.log(`${error.message}`);
});

// o catch tb vai receber a mesma coisa que o resolve, neste caso               >>> reject(randomNumber)