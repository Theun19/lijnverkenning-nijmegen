const input = document.getElementById("lijnInput");
const knop = document.getElementById("checkBtn");
const resultaat = document.getElementById("resultaat");

const lijnen = new Set(["6", "8", "9", "11", "12", "15", "85", "220", "221", "383"]);

function setMelding(tekst, type) {
  resultaat.textContent = tekst;
  resultaat.classList.remove("alert-info", "alert-warning", "alert-success", "alert-danger");
  resultaat.classList.add(type);
}

function checkLijn() {
  const waarde = input.value.trim();

  if (!waarde) {
    setMelding("Voer eerst een lijnnummer in.", "alert-warning");
    return;
  }

  if (lijnen.has(waarde)) {
    setMelding(`Lijn ${waarde} staat in het overzicht.`, "alert-success");
  } else {
    setMelding(`Lijn ${waarde} staat nog niet in dit overzicht.`, "alert-danger");
  }
}

knop.addEventListener("click", checkLijn);
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") checkLijn();
});
