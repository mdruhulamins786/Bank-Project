document.getElementById("btn-submit").addEventListener("click", () => {
  const emailField = document.getElementById("user-email");
  const email = emailField.value;

  //   password

  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;

  if (email === "ruhul@gmail.com" && password === "1234") {
    window.location.href = "bank.html";
  } else {
    console.log("invalid");
  }
});
