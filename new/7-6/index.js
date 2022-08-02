// Sukurkite formą, kurioje vienas input - skaičius, įvesti stačiakampio dydį. Po forma - tegul būna tusčias div elementas. Jame reikia atvaizduoi trikampį pagal įvestą input.

const inputTriangleSize = document.getElementById('input-triangle-size');
const divRez = document.getElementById('div-rez');

inputTriangleSize.addEventListener('input', inputSizeHandler);

function inputSizeHandler(e) {
  const size = e.target.value;
  let rez = '';
  for (let index = 1; index <= size; index++) {
    for (let j = 0; j < index; j++) {
      rez += '*';
    }

    rez += '<br/>';
  }

  divRez.innerHTML = rez;
}
