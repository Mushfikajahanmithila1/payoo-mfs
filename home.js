// Add money to the account
document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // Get the amount and pin from the input fields
    const amount = document.getElementById("in-add-money").value;
    const pin = document.getElementById("in-pin").value;

    // check the pin is correct
    if (pin === "1234") {
      // Get the current balance
      const balace = document.getElementById("balance").innerText;
      const currentBaalance = parseFloat(balace);
      const amountToAdd = parseFloat(amount);
      console.log(typeof currentBaalance, amountToAdd);

      // Calculate the new balance
      const newBalance = currentBaalance + amountToAdd;

      // Update the balance on the page
      document.getElementById("balance").innerText = newBalance;
    } else {
      alert("Pin is incorrect. Please try again.");
    }
  });

// cash out
document.getElementById("cash-out").addEventListener("click", function (event) {
  event.preventDefault();

  // Get the amount and pin from the input fields
  const amount = document.getElementById("in-cash-out").value;
  const pin = document.getElementById("in-cash-out-pin").value;

  // check the pin is correct
  if (pin === "1234") {
    // Get the current balance
    const balace = document.getElementById("cash-out-balance").innerText;
    const currentBaalance = parseFloat(balace);
    const amountToCashOut = parseFloat(amount);

    // Calculate the new balance
    const newBalance = currentBaalance - amountToCashOut;

    // Update the balance on the page
    document.getElementById("cash-out-balance").innerText = newBalance;
  } else {
    alert("Pin is incorrect. Please try again.");
  }
});
