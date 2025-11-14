// Select elements
const billInput = document.getElementById("billAmount");
const peopleInput = document.getElementById("numPeople");
const tipButtons = document.querySelectorAll(".buttons button");
const tipDisplay = document.getElementById("tip");
const totalDisplay = document.getElementById("total");
const resetBtn = document.querySelector(".reset-btn");

let tipPercent = 0;

// Handle tip button clicks
tipButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.id === "custom-btn") {
      const customTip = prompt("Enter custom tip percentage:");
      tipPercent = parseFloat(customTip) || 0;
    } else {
      tipPercent = parseFloat(btn.textContent.replace("%", ""));
    }
    calculate();
  });
});

// Calculate function
function calculate() {
  const bill = parseFloat(billInput.value);
  const people = parseInt(peopleInput.value);

  if (isNaN(bill) || bill <= 0 || isNaN(people) || people <= 0) {
    tipDisplay.textContent = "0.00";
    totalDisplay.textContent = "0.00";
    return;
  }

  const tipAmount = (bill * (tipPercent / 100)) / people;
  const totalAmount = (bill + bill * (tipPercent / 100)) / people;

  tipDisplay.textContent = tipAmount.toFixed(2);
  totalDisplay.textContent = totalAmount.toFixed(2);
}

// Reset function
resetBtn.addEventListener("click", () => {
  billInput.value = "";
  peopleInput.value = "";
  tipDisplay.textContent = "0.00";
  totalDisplay.textContent = "0.00";
  tipPercent = 0;
});
