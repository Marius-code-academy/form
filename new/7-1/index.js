// Įmonė visiems savo darbuotojams duoda Kalėdų bonusą - 50 eurų. Tiems darbuotojams, kurie dirba ilgiau nei 10 metų - prideda papildomus 50 eurų (bendrai - 100 eurų). O jei dirba 20 metų ar daugiau - papildomus 100 eurų (iš viso - 200 eurų). Parašyk programą, kuri leistų darbuotojui įsivesti skaičių kiek dirbo metų įmonėje, input elementu - atsirastų tekstas su pervedamu bonusu.
// Pvz: [16] => "Jūsų bonusas: 100 eurų".

const inputMetai = document.getElementById('input-metai');
const metaiResult = document.getElementById('metai-result');

inputMetai.addEventListener('input', inputMetaiHandler);

function inputMetaiHandler(event) {
  let bonus = 50;
  const pradirbtiMetai = inputMetai.value;

  if (pradirbtiMetai > 10) {
    bonus += 50;
  }
  if (pradirbtiMetai >= 20) {
    bonus += 100;
  }

  metaiResult.value = bonus;
}
