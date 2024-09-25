const assistantTab = document.querySelector("#assistant-tab");
const historyTab = document.querySelector("#history-tab");

document.querySelector("#calculate").addEventListener("click", () => {
  const incomeEl = getInputValueById("income");
  const softwareEl = getInputValueById("software");
  const coursesEl = getInputValueById("courses");
  const internetEl = getInputValueById("internet");
  const totalExpenses = softwareEl + coursesEl + internetEl;
  const balance = incomeEl - totalExpenses;

  if (isNaN(incomeEl) || incomeEl <= 0) {
    document.querySelector("#income-error").classList.remove("hidden");
    return;
  }
  if (isNaN(softwareEl) || softwareEl <= 0) {
    document.querySelector("#software-error").classList.remove("hidden");
    return;
  }
  if (isNaN(coursesEl) || coursesEl <= 0) {
    document.querySelector("#courses-error").classList.remove("hidden");
    return;
  }
  if (isNaN(internetEl) || internetEl <= 0) {
    document.querySelector("#internet-error").classList.remove("hidden");
    return;
  }
  if(totalExpenses > incomeEl){
    document.querySelector("#logic-error").classList.remove("hidden");
    return;
  }

  document.getElementById("results").classList.remove("hidden");
  document.querySelector("#total-expenses").innerText =
    totalExpenses.toFixed(2);
  document.querySelector("#balance").innerText = balance.toFixed(2);

  const div = document.createElement("div");
  div.className = "bg-white border-l-2 p-3 border-indigo-500";
  console.log(div);
  div.innerHTML = `
     <p class=" text-sm text-gray-800"><span class="font-bold">Income:</span> ${incomeEl.toFixed(2)}</p>
            <p class=" text-sm text-gray-800"><span class="font-bold">Expanses:</span> ${totalExpenses.toFixed(2)}</p>
            <p class=" text-sm text-gray-800"><span class="font-bold">Balance:</span> ${balance.toFixed(2)}</p>
  `;
  const historyList = document.querySelector("#history-list");
  historyList.insertBefore(div, historyList.firstChild);
});

// calculate savings

document.querySelector("#calculate-savings").addEventListener("click", () => {
  const incomeEl = getInputValueById("income");
  const softwareEl = getInputValueById("software");
  const coursesEl = getInputValueById("courses");
  const internetEl = getInputValueById("internet");
  const savingsEl = getInputValueById("savings");

  if (isNaN(savingsEl) || savingsEl <= 0) {
    document.querySelector("#savings-error").classList.remove("hidden");
    return;
  }
  const totalExpenses = softwareEl + coursesEl + internetEl;
  const balance = incomeEl - totalExpenses;
  const savings = (balance * savingsEl) / 100;
  document.querySelector("#savings-amount").innerText = savings;
  document.querySelector("#remaining-balance").innerText = balance - savings;
});

// history tab

historyTab.addEventListener("click", () => {
  historyTab.classList.add(
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600",
    "text-white"
  );
  assistantTab.classList.remove(
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600",
    "text-white"
  );
  document.querySelector("#expense-form").classList.add("hidden");
  document.querySelector("#results").classList.remove("hidden");
  document.querySelector("#history-section").classList.remove("hidden");
});

// assistanceTab

assistantTab.addEventListener("click", () => {
  assistantTab.classList.add(
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600",
    "text-white"
  );
  historyTab.classList.remove(
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600",
    "text-white"
  );
  document.querySelector("#expense-form").classList.remove("hidden");
  document.querySelector("#results").classList.add("hidden");
  document.querySelector("#history-section").classList.add("hidden");
});
