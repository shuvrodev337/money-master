//------------------------------//
function getInputValueByID(elementID) {
  const inputElement = document.getElementById(elementID);
  const inputElementString = inputElement.value;
  const inputValue = parseFloat(inputElementString);
  if (isNaN(inputElementString)) {
    return
  }
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
    alert("Your expense is more than you income");
    return;
  }
   else if (isNaN(totalExpenses)) {
    alert("Please fill up all the boxes with valid numbers!!!");
    return;
  }else if (income<0 || foodExpense<0 || rentExpense<0 || clothesExpense<0) {
    alert("Insert positive numbers!!!")
    return
  }

  const balanceBeforeSaving = income - totalExpenses;
  setTextElementValueByID("total-expenses", totalExpenses);
  setTextElementValueByID("balance-before-saving", balanceBeforeSaving);
  document.getElementById("savings-percentage").value=""
  document.getElementById("saving-amount").innerText="0"
  document.getElementById("remaining-balance").innerText="0"
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

    if (savingsPercentage>100) {
        alert("Can not save more than 100%");
        return
    }else if (savingsPercentage<0) {
        alert("Can not save negative percentage!!!");
        return
    }else if (isNaN(savingAmount)) {
        alert("please insert a valid percentage!!!")
        return;
    } else if (remainingBalance < 0) {
      alert("Not Enough balance left to save");
      return;
    }
    setTextElementValueByID("saving-amount", savingAmount);
    setTextElementValueByID("remaining-balance", remainingBalance);
  });

// console.log( parseFloat('o9kk'));