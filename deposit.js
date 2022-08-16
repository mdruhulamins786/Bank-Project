// btn-deposit
let totalB = 1240;
document.getElementById("btn-deposit").addEventListener("click", () => {
  const depositFiledElement = document.getElementById("deposit-field");
  const depositFiledString = depositFiledElement.value;
  const depositFiled = parseFloat(depositFiledString);

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
  const totalAdd = document.getElementById("deposit-total");

  console.log(totalAdd.value);

  const totalBalance = totalB + parseInt(totalAdd.innerText);
  addBalance.innerText = totalBalance;

  depositFiledElement.value = "";
});
