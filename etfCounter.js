function calculateVuaa() {
  const money = parseFloat(document.getElementById("monthly").value);
  const numOfYears = parseInt(document.getElementById("years").value);
  const rate = parseFloat(document.getElementById("rate").value) / 100;

  if (isNaN(money) || isNaN(numOfYears) || isNaN(rate)) {
    alert("Please enter valid numbers.");
    return;
  }

  let totalMoney = 0;
  let futureValue = 0;

  for (let year = 1; year <= numOfYears; year++) {
    totalMoney += money * 12;
    futureValue = (futureValue + money * 12) * (1 + rate);
  }

  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = `
    <p><strong>Total Invested:</strong> €${totalMoney.toFixed(2)}</p>
    <p><strong>Future Value:</strong> €${futureValue.toFixed(2)}</p>
    <p><strong>Total Profit:</strong> €${(futureValue - totalMoney).toFixed(
      2
    )}</p>
  `;
}
