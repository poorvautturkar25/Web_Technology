let transactions = [];

// Add Transaction
function addTransaction() {
  let desc = document.getElementById("desc").value;
  let amount = Number(document.getElementById("amount").value);
  let type = document.getElementById("type").value;
  let category = document.getElementById("category").value;

  if (desc === "" || amount === 0) return;

  let transaction = {
    desc,
    amount,
    type,
    category
  };

  transactions.push(transaction);

  displayTransactions();
}

// Display Transactions
function displayTransactions() {
  let list = document.getElementById("list");
  list.innerHTML = "";

  transactions.forEach((t, index) => {
    list.innerHTML += `
      <li>
        ${t.desc} - ₹${t.amount} (${t.type}, ${t.category})
        <button onclick="deleteTransaction(${index})">❌</button>
      </li>
    `;
  });

  calculateSummary();
  showChart();
}

// Delete
function deleteTransaction(index) {
  transactions.splice(index, 1);
  displayTransactions();
}

// Calculate Summary
function calculateSummary() {
  let income = transactions
    .filter(t => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  let expense = transactions
    .filter(t => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  let balance = income - expense;

  document.getElementById("summary").innerText =
    `Income: ₹${income} | Expense: ₹${expense} | Balance: ₹${balance}`;

  findHighestCategory();
}

// Highest Expense Category
function findHighestCategory() {
  let categoryTotals = {};

  transactions.forEach(t => {
    if (t.type === "expense") {
      categoryTotals[t.category] =
        (categoryTotals[t.category] || 0) + t.amount;
    }
  });

  let highest = "";
  let max = 0;

  for (let cat in categoryTotals) {
    if (categoryTotals[cat] > max) {
      max = categoryTotals[cat];
      highest = cat;
    }
  }

  document.getElementById("highest").innerText =
    `Highest Spending: ${highest} (₹${max})`;
}

// Simple Chart
function showChart() {
  let chart = document.getElementById("chart");
  chart.innerHTML = "";

  let categoryTotals = {};

  transactions.forEach(t => {
    if (t.type === "expense") {
      categoryTotals[t.category] =
        (categoryTotals[t.category] || 0) + t.amount;
    }
  });

  for (let cat in categoryTotals) {
    chart.innerHTML += `
      <div class="bar" style="width:${categoryTotals[cat]}px">
        ${cat} - ₹${categoryTotals[cat]}
      </div>
    `;
  }
}