document.getElementById('calculate').addEventListener('click', function() {
  const bill = parseFloat(document.getElementById('bill').value)
  const tipPercentage = parseFloat(document.getElementById('tip').value)

  if (isNaN(bill) || isNaN(tipPercentage) || bill <= 0 || tipPercentage < 0) {
    alert('Please enter valid numbers!')
    return
  }

  const tipAmount = (bill * tipPercentage) / 100
  const totalAmount = bill + tipAmount

  document.getElementById('tip-amount').textContent = tipAmount.toFixed(2)
  document.getElementById('total-amount').textContent = totalAmount.toFixed(1)
})