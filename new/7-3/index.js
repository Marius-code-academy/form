// Parašyk programą, kurioje vartotojas įrašo temperatūra Celsijumi, o programa paskaičiuoja ir atvaizduoja tą pačią temperatūrą Farenheitu.
//multiply by 1.8 (or 9/5) and add 32.

// input data ir input rez ir mygtuko
// inputus pasiimti i js ir mygtuka pasiimti i js
// prideti click eventa ant mygtuko
// susikurti click evento handler funkcija
// pasirasyti logika funkcijoje, kuri konvertuoja celciju i farenheita
// atvaizduoti rezultata rezultato inpute

let inputCelsius = document.getElementById('input-celsius');
let inputFahrenheit = document.getElementById('input-fahrenheit');

const buttonConvert = document.getElementById('button-convert');

buttonConvert.addEventListener('click', buttonConvertHandler);

function buttonConvertHandler(event) {
  inputFahrenheit.value = inputCelsius.value * 1.8 + 32;
}
