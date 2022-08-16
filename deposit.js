// btn-deposit

document.getElementById("btn-deposit").addEventListener("click", () => {
  const depositFiledElement = document.getElementById("deposit-field");
  const depositFiledString = depositFiledElement.value;
  const depositFiled = parseFloat(depositFiledString);

  depositFiledElement.value = "";

  if (isNaN(depositFiled)) {
    alert("Please enter a valid number");
    return;
  }

  const depositTotal = document.getElementById("deposit-total");
  const depositTotalString = depositTotal.innerText;
  const depositTotalAmount = parseFloat(depositTotalString);

  const totalAmount = depositFiled + depositTotalAmount;
  depositTotal.innerText = totalAmount;

  const addBalance = document.getElementById("add-money");
  const addBalanceString = addBalance.innerText;
  const totalAdd = parseFloat(addBalanceString);

  const totalBalance = totalAdd + depositFiled;
  addBalance.innerText = totalBalance;
});
