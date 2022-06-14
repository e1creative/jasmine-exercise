window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
const amountInput =  document.getElementById("loan-amount")
const yearsInput  =  document.getElementById("loan-years")
const rateInput   =  document.getElementById("loan-rate")
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  amountInput.value = 100000
  yearsInput.value = 6
  rateInput.value = 4
  getCurrentUIValues()
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let newValues = getCurrentUIValues()
  calculateMonthlyPayment(newValues)
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(currentValues) {
  let { amount, years, rate } = currentValues

  let periodicRate = (rate / 12) / 100
  let totalPayments = years * 12  

  let monthlyPayment = ( amount * periodicRate ) / ( 1 - ( ( 1 + periodicRate) ** ( totalPayments * -1 ) ) )
  
  updateMonthly(monthlyPayment)
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthlyPayment) {
  document.getElementById('monthly-payment').innerText = `$${monthlyPayment.toFixed(2)}`
}
