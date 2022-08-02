// Sukurk programą, kurioje reikia įvesti elektroninį paštą ir paspausti mygtuką "sutinku gauti laiškus". Suvedus duomenis, jei mygtukas "sutinku" nepasirinktas - išmeta - "Registracija nesėkminga. Jei pasirinktas - išmeta "El. paštas [paštas] sėkmingai užregistruotas".

// susikurti input emailui, checkbox sutinku, mygtukas registruokis
// pasiimti elementus i js
// uzmeti click eventa ant mygtuko
// sukurti handler funkcija
// funkcijos logika:
// 1 pasiimti checkboxo value
// 2 pasiimti email input value
// 3 parasyti if:
//      jei ceckbox value true: ismeta teksta El. paštas [paštas] sėkmingai užregistruotas
//      jei false: Registracija nesėkminga

const inputEmail = document.getElementById('input-email');
const inputSutinku = document.getElementById('input-sutinku');
const buttonRegistruotis = document.getElementById('button-registruotis');

buttonRegistruotis.addEventListener('click', buttonRegisterHandler);

function buttonRegisterHandler(e) {
  const checkboxValue = inputSutinku.checked;
  const emailValue = inputEmail.value;

  if (checkboxValue) {
    alert(`El. paštas ${emailValue} sėkmingai užregistruotas`);
  } else {
    alert('Registracija nesėkminga');
  }
}
