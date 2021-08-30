const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const ckButton = document.querySelector("#ck-button");
const nxtButton = document.querySelector("#nxt-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".noOfNotes");
const cashGivenSection = document.querySelector(".cash-given-section");
const notesSection = document.querySelector(".notes-section");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

nxtButton.addEventListener("click", function showCashAmountAmount() {
  hideMessage();
  if (Number(billAmount.value) > 0) {
    nxtButton.style.display = "none";
    cashGivenSection.style.display = "block";
  } else {
    console.log("Bill Amount");
    showMessage("Enter valid bill amount.");
  }
});

ckButton.addEventListener("click", function valiateAndBillAmount() {
  hideMessage();
  if (billAmount.value > 0) {
    if (Number(cashGiven.value) >= Number(billAmount.value)) {
      notesSection.style.display = "block";
      const amountToBeReturned = cashGiven.value - billAmount.value;
      calculateChange(amountToBeReturned);
    } else {
      showMessage("The Cash Provided should be equal to Bill Amount");
    }
  } else {
    showMessage("Invalid Bill Amount");
  }
});

function calculateChange(amountToBeReturned) {
  for (i = 0; i < availableNotes.length; i++) {
    numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    amountToBeReturned = amountToBeReturned % availableNotes[i];

    noOfNotes[i].innerText = numberOfNotes;
  }
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}

function hideMessage() {
  message.style.display = "none";
}
