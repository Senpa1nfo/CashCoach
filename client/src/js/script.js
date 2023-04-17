"use strict";

const inputField = document.querySelector("#src"),
	  inputFieldDescr = document.querySelector("#amnt"),
	  addIncomeBtn = document.querySelector("input[value='Додати прибуток']"),
	  addExpenseBtn = document.querySelector("input[value='Додати витрату']");

// Створення об'єкту, що зберігає витрати та доходи
let budget = {
    incomes: [],
    expenses: [],
    // Метод для додавання доходів
    addIncome(description, amount) {
      budget.incomes.push({
      description: description,
      amount: amount,
      date: new Date()
      });
    },
    // Метод для додавання витрат
    addExpense(description, amount) {
      budget.expenses.push({
      description: description,
      amount: amount,
      date: new Date()
    });
  },
  // Метод для отримання витрат та доходів за певний період
  getExpensesAndIncome(startDate, endDate) {
    let filteredIncome = budget.incomes.filter(function(income) {
      return income.date >= startDate && income.date <= endDate;
    });

    let filteredExpenses = budget.expenses.filter(function(expense) {
      return expense.date >= startDate && expense.date <= endDate;
    });

    let totalIncome = 0;
    let totalExpenses = 0;

    for (let i = 0; i < filteredIncome.length; i++) {
      totalIncome += +filteredIncome[i].amount;
    }

    for (let i = 0; i < filteredExpenses.length; i++) {
      totalExpenses += +filteredExpenses[i].amount;
    }

    return {
      incomes: totalIncome,
      expenses: totalExpenses
    };
  }
};

// Додання обробників подій на кнопки для заповнення таблиці
function attachButtonEventListener(btn, flag) {
	btn.addEventListener('click', () => {
		let srcOrTrgt = inputField.value;
		let	size = +inputFieldDescr.value;
		if(srcOrTrgt && size && typeof(size) == 'number') {
			if(flag) {
				budget.addIncome(srcOrTrgt, size);
			}
			else budget.addExpense(srcOrTrgt, size);

			inputField.value = '';
			inputFieldDescr.value = '';
			cleanTable();
			buildTable(copyIncomes(), true);
			buildTable(copyExpenses(), false);
		}
		else alert('Введіть коректні дані!');
	});
}

attachButtonEventListener(addIncomeBtn, true);
attachButtonEventListener(addExpenseBtn, false);

// СТАТИСТИКА
let today = new Date();

// Об'єкт статистики
const stats = {
// Отримання статистики за день
  getDailyStats() {
    let startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0);
    let endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59);
    let dailyStats = budget.getExpensesAndIncome(startOfDay, endOfDay);

    console.log('Статистика за день:');
    console.log('Дохід: ' + dailyStats.incomes);
    console.log('Витрати: ' + dailyStats.expenses);
    console.log('Загалом:' + (dailyStats.incomes-dailyStats.expenses));
  },
  // Отримання статистики за тиждень
  getWeeklyStats() {
    let startOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay(), 0, 0, 0);
    let endOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + (6 - today.getDay()), 23, 59, 59);
    let weeklyStats = budget.getExpensesAndIncome(startOfWeek, endOfWeek);

    console.log('Статистика за тиждень:');
    console.log('Дохід: ' + weeklyStats.incomes);
    console.log('Витрати: ' + weeklyStats.expenses);
    console.log('Загалом:' + (weeklyStats.incomes-weeklyStats.expenses));
  },
  // Отримання статистики за місяць
  getMonthlyStats() {
    let startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1, 0, 0, 0);
    let endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0, 23, 59, 59);
    let monthlyStats = budget.getExpensesAndIncome(startOfMonth, endOfMonth);

    console.log('Статистика за місяць:');
    console.log('Дохід: ' + monthlyStats.incomes);
    console.log('Витрати: ' + monthlyStats.expenses);
    console.log('Загалом:' + (monthlyStats.incomes-monthlyStats.expenses));
  },
  // Отримання статистики за рік
  getYearlyStats() {
    let startOfYear = new Date(today.getFullYear(), 0, 1, 0, 0, 0);
    let endOfYear = new Date(today.getFullYear(), 11, 31, 23, 59, 59);
    let yearlyStats = budget.getExpensesAndIncome(startOfYear, endOfYear);
  
    console.log('Статистика за рік:');
    console.log('Дохід: ' + yearlyStats.incomes);
    console.log('Витрати: ' + yearlyStats.expenses);
    console.log('Загалом:' + (yearlyStats.incomes-yearlyStats.expenses));
  }
}











