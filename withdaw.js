document.getElementById("btn-withdraw").addEventListener("click", () => {
  const depositFiledElement = document.getElementById("withdraw-field");
  const depositFiledString = depositFiledElement.value;
  const depositFiled = parseFloat(depositFiledString);

  depositFiledElement.value = "";

  if (isNaN(depositFiled)) {
    alert("Please enter a valid number");
    return;
  }

  const depositTotal = document.getElementById("withdraw-balance");
  const depositTotalString = depositTotal.innerText;
  const depositTotalAmount = parseFloat(depositTotalString);

  const addBalance = document.getElementById("add-money");
  const addBalanceString = addBalance.innerText;
  const totalAdd = parseFloat(addBalanceString);

  if (depositFiled > totalAdd) {
    alert("not a amount");
    return;
  }

  const totalAmount = depositFiled + depositTotalAmount;
  depositTotal.innerText = totalAmount;

  const totalWithdraw = totalAdd - totalAmount;
  addBalance.innerText = totalWithdraw;
});
