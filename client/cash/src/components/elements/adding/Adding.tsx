import './Adding.sass';
import { useState, useRef } from 'react';

const Adding = () => {
    interface IBudgetItem {
        source: string;
        amount: number;
        type: string;
        date: string;
    }
    const [budgetQueue, setBudgetQueue] = useState<IBudgetItem[]>([]);
    const sourceInputRef = useRef<HTMLInputElement>(null);
    const amountInputRef = useRef<HTMLInputElement>(null);

    function elementAdd(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault();

        const source = sourceInputRef.current?.value || '';
        const amount = parseInt(amountInputRef.current?.value || '0');
        const target = event.target as HTMLButtonElement;

        if (target.textContent === 'Додати прибуток') {
            const newIncome = { source, amount, type: 'income', date: new Date().toLocaleString() };
            setBudgetQueue([...budgetQueue, newIncome]);
        } else if (target.textContent === 'Додати витрату') {
            const newExpense = { source, amount, type: 'expense', date: new Date().toLocaleString() };
            setBudgetQueue([...budgetQueue, newExpense]);
        }
        console.log(budgetQueue);
        // Очистити вміст вхідних елементів
        sourceInputRef.current && (sourceInputRef.current.value = '');
        amountInputRef.current && (amountInputRef.current.value = '');
    }
  
    return (
        <div className="adding">
            <form action="" className="adding__form">
                <input type="text" ref={sourceInputRef} className="adding__input" placeholder="Джерело доходу / ціль витрати" />
                <input type="number" ref={amountInputRef} className="adding__input" placeholder="Введіть суму" />
                <div className="adding__buttons">
                    <button onClick={elementAdd} type="submit" className="adding__btn">
                        Додати прибуток
                    </button>
                    <button onClick={elementAdd} type="submit" className="adding__btn">
                        Додати витрату
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Adding;
