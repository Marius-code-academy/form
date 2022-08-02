// Kiek dienų šiais metais? Parašykite programą, kur įvedus metus - pasakys ar jie keliemieji, ar ne (po forma). Kaip apskaičiuoti ar keliemiji metai? Jie turi dalintis iš keturių, bet jei dalinasi iš 100, tai turi dalintis ir iš 400, kad būtų keliamieji (angl. a year is a leap year if it is divisible by four, except that any year divisible by 100 is a leap year only if it is also divisible by 400). Tai - populiari užduotis, tad internete rasite ne vieną versiją, ir daug teorijos kaip skirtingi žmonės skaičiuoja. Tad rekomenduojame padarius - pasitikrinti ir kitų žmonių idėjas.

// TODO:
// 1. susikurti input fielda, rezultato fielda
// 2. i js pasiimti input ir rez fieldus
// 3. uzdeti input eventa ant metu input fieldo
// 4. apsirasyti funkcija kuria kviesi kaskart kai ivyks musu sukurtas eventas
// 5. salyga, kad dalinasi is 4 be liekanos %
// 6. turi nesidalinti is 100 arba dalintis is 400
// 7. rezultata atvaizduoti rezultato elemente

const input = document.getElementById('metai-input');
const rezultatas = document.getElementById('metai-rezultatas');

input.addEventListener('input', inputEventHandler);

function inputEventHandler(event) {
  if (input.value % 4 === 0 && (input.value % 100 !== 0 || input.value % 400 === 0)) {
    rezultatas.value = 'keliamieji';
  } else {
    rezultatas.value = 'nekeliamieji';
  }
}
