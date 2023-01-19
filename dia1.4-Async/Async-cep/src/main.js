import getAdress from "./getAdress"; 

const btn = document.querySelector('#consCEP');

export async function handleClick() {
  const cepValue = document.querySelector('#cep').value;

  try {
    const adressData = await getAdress(cepValue);
    document.querySelector('#result').innerHTML = JSON.stringify(adressData);
  } catch (error) {
    alert(error.message);
  }
}

btn.addEventListener('click', handleClick);