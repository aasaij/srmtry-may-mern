function calculate() {
  // Extracting the data from HTML document
  let principal = Number(document.getElementById("principal").value);
  let years = Number(document.getElementById("years").value);
  let rate = Number(document.getElementById("rate").value);
  let interestType = document.interestCalculator.interestType.value;
  // Calculating the compound interest
  let interest = 0;
  if (interestType == "C") {
    interest = principal * (1 + rate / 100) ** years - principal;
  } else if (interestType == "S") {
    interest = (principal * years * rate) / 100;
  }

  // Displaying the result
  document.getElementById("interest").value = interest.toFixed(2);
  //   document.getElementById("interest").value = Math.round(interest);
}
