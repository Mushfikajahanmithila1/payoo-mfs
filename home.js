// Add money to the account
document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission
    // console.log("Add money button clicked");
    const amountInput = document.getElementById("in-add-money").value;
    console.log("Amount to add:", amountInput);
    const pinInput = document.getElementById("in-pin").value;
    console.log("Pin entered:", pinInput);
    // Here you can add your logic to handle the add money action, e.g., send data to the server
  });
