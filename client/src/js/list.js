
// Створення елементів
const $list = document.querySelector('.statistics__table'),
      $table = document.createElement('table'),
      $tableHead = document.createElement('thead'),
      $tableBody = document.createElement('tbody'),
      $tableHeadTr = document.createElement('tr'),
      $tableHeadThEdit = document.createElement('th'),
      $tableHeadThDescr = document.createElement('th'),
      $tableHeadThValue = document.createElement('th'),
      $tableHeadThDate = document.createElement('th'),
      $tableHeadThDelete = document.createElement('th');

$table.classList.add('table');

// Додання заголовків таблиці
$tableHeadThEdit.innerHTML = '';
$tableHeadThDescr.textContent = 'Опис';
$tableHeadThValue.textContent = 'Сума';
$tableHeadThDate.textContent = 'Дата';
$tableHeadThDelete.innerHTML = '<img src="icons/delete.svg" alt="delete" class="delete">';


$tableHeadTr.append($tableHeadThEdit);
$tableHeadTr.append($tableHeadThDescr);
$tableHeadTr.append($tableHeadThValue);
$tableHeadTr.append($tableHeadThDate);
$tableHeadTr.append($tableHeadThDelete);

$tableHead.append($tableHeadTr);
$table.append($tableHead);
$table.append($tableBody);
$list.append($table);
        
// Копіювання доходів з об'єкту
function copyIncomes() {
    const copyBudgetIncomes = [...budget.incomes];
    for (const income of copyBudgetIncomes) {
        income.normalDate = income.date.getDate() + "." + (income.date.getMonth() + 1) + "." + income.date.getFullYear();
    }
    return copyBudgetIncomes;
}

// Копіювання витрат з об'єкту
function copyExpenses() {
    const copyBudgetExpenses = [...budget.expenses];
    for (const expense of copyBudgetExpenses) {
        expense.normalDate = expense.date.getDate() + "." + (expense.date.getMonth() + 1) + "." + expense.date.getFullYear();
    }
    return copyBudgetExpenses;
}
// Очищення таблиці
function cleanTable() {
    $tableBody.innerHTML ='';
}

// Функція копіювання до буфера обміну
function copyToClipboard(el) {
    el.addEventListener('click', () => {
        const text = el.textContent;
    
        navigator.clipboard.writeText(text)
          .then(() => {
            console.log('Text copied to clipboard:', text);
          })
          .catch(err => {
            console.error('Failed to copy text:', err);
          });
      });
}

// Побудова таблиці
function buildTable(moneyFlowEl, flag) {
    for (const item of moneyFlowEl) {
        const $itemTr = document.createElement('tr'),
              $itemEdit = document.createElement('td'),
              $itemDescr = document.createElement('td'),
              $itemValue = document.createElement('td'),
              $itemDate = document.createElement('td'),
              $itemDelete = document.createElement('td');
        
        // Для бекенду
        $itemDescr.classList.add('editable');
        $itemValue.classList.add('editable');
        $itemEdit.innerHTML = '<img src="icons/edit.svg" alt="edit" class="edit">';
        $itemDelete.innerHTML = '<input type="checkbox" name="select">';

        // Копіювання суми у буфер обміну
        copyToClipboard($itemValue);

        // Додання підказки при наведенні
        $itemValue.setAttribute('data-tooltip', 'Клацніть щоб скопіювати');
        
        $itemValue.addEventListener('click', () => {
            $itemValue.setAttribute('data-tooltip', 'Текст успішно скопійовано');
            setTimeout(() => {
                $itemValue.setAttribute('data-tooltip', 'Клацніть щоб скопіювати');
            }, 2000);
        });

        $itemDescr.textContent = item.description;
        $itemValue.textContent = item.amount;
        if(flag) {
            $itemValue.style.color = '#27AE60';
        }
        else {
            $itemValue.style.color = '#FC4C4F';
        }

        $itemDate.textContent = item.normalDate;

        $itemTr.append($itemEdit);
        $itemTr.append($itemDescr);
        $itemTr.append($itemValue);
        $itemTr.append($itemDate);
        $itemTr.append($itemDelete);
        
        $tableBody.append($itemTr);
    }
}


