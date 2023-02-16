//------------------------------//
function getInputValueByID(elementID) {
  const inputElement = document.getElementById(elementID);
  const inputElementString = inputElement.value;
  const inputValue = parseFloat(inputElementString);
  return inputValue;
}

function setTextElementValueByID(elementID, value) {
  const element = document.getElementById(elementID);
  element.innerText = value;
}
function getTextElementValueByID(elementID) {
  const element = document.getElementById(elementID);
  return element.innerText;
}

//-----------------------//
let calculateButtonCount=0;
document.getElementById("calculate-btn").addEventListener("click", function () {
  const income = getInputValueByID("income-field");
  const foodExpense = getInputValueByID("food-expense");
  const rentExpense = getInputValueByID("rent-expense");
  const clothesExpense = getInputValueByID("clothes-expense");
  const totalExpenses = foodExpense + rentExpense + clothesExpense;
  if (totalExpenses > income) {
    alert("Cut your coat according to your cloth");
    return;
  } else if (isNaN(totalExpenses)) {
    alert("please fill up all boxes with valid numbers");
    return;
  }
  const balanceBeforeSaving = income - totalExpenses;
  setTextElementValueByID("total-expenses", totalExpenses);
  setTextElementValueByID("balance-before-saving", balanceBeforeSaving);
  calculateButtonCount++
});

document.getElementById("savings-button").addEventListener("click", function () {
    if (calculateButtonCount<1) {
        alert("Please Calculate Your Expenses First")
        return
    }
    const savingsPercentage = getInputValueByID("savings-percentage");
    const income = getInputValueByID("income-field");
    const savingAmount = (income * (savingsPercentage / 100)).toFixed(2);
    const balanceBeforeSavingString = getTextElementValueByID("balance-before-saving");
    const balanceBeforeSaving = parseFloat(balanceBeforeSavingString);
    const remainingBalance = balanceBeforeSaving - savingAmount;
    if (remainingBalance < 0) {
      alert("Not Enough money to save");
      return;
    } else if (isNaN(savingAmount)) {
      alert("pls enter valid numbers");
      return;
    }
    setTextElementValueByID("saving-amount", savingAmount);
    setTextElementValueByID("remaining-balance", remainingBalance);
  });
