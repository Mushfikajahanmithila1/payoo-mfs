document.getElementById("login").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form submission
  console.log("Login button clicked");
  // Add your login logic here, e.g., validate credentials, redirect, etc.
  const phonenumber = document.getElementById("phone-number").value; // Clear phone number input
  const pin = document.getElementById("pin").value; // Clear PIN input
  //   console.log(phonenumber, pin);
  if (phonenumber === "34" && pin === "1234") {
    console.log("Login successful!");
    // Redirect to another page or perform other actions
    window.location.href = "home.html"; // Example: redirect to dashboard
  } else {
    alert("Invalid phone number or PIN. Please try again.");
  }
});
