import './SumArea.sass';

import { useState, useRef } from 'react';

function SumArea() {
	const [amount, setAmount] = useState(0);
	const [percent, setPercent] = useState(0);
	const [period, setPeriod] = useState(0);

	const handleAmountChange = (event:React.ChangeEvent<HTMLInputElement>) => {
		const newAmount = parseFloat(event.target.value);
		setAmount(newAmount);
	}

	const handlePercentChange = (event:React.ChangeEvent<HTMLInputElement>) => {
		const newPercent = parseFloat(event.target.value);
		setPercent(newPercent);
  	}

	const handlePeriodChange = (event:React.ChangeEvent<HTMLInputElement>) => {
		const newPeriod = parseFloat(event.target.value);
		setPeriod(newPeriod);
  	}

	const rightWordEnding = (number:number, text: string[], cases = [2, 0, 1, 1, 1, 2]) =>  text[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];

	const outputRef = useRef<HTMLDivElement | null>(null);

	const handleCalculate = () => {
		if (!amount || amount <= 0) {
			alert('Введіть коректну суму!');
			return;
		}
		if (!percent || percent <= 0) {
			alert('Введіть коректний відсоток!');
			return;
		}
		if (!period || period <= 0) {
			alert('Введіть коректний період!');
			return;
		}

		let savings = amount * percent / 100;
		let sum = amount - savings;

		if (outputRef.current) {
			outputRef.current.innerHTML = '';
			outputRef.current.innerHTML += `<p>Заощадження: ${savings.toFixed(2)}</p>`;
			if(period) {
				outputRef.current.innerHTML += `<p>Можна витратити за ${period} ${rightWordEnding(period, ['день', 'дні', 'днів'])}: ${(sum/period).toFixed(2)}</p>`
			} else {
				alert('Введіть коректний період!');
			}
			outputRef.current.innerHTML += `<h3>До прикладу</h3>`;
			outputRef.current.innerHTML += `<p>На день з місяця можна витрачати по: ${(sum/30).toFixed(2)}</p>`;
			outputRef.current.innerHTML += `<p>На тиждень з місяця можна витрачати по: ${(sum/4).toFixed(2)}</p>`;
		}

	}
	  
	return (
		<div>
			<h2>Опрацювання суми</h2>
			<label>
				Введіть суму:
				<input type="number" value={amount} onChange={handleAmountChange} />
			</label>
			<br />
			<label>
				Введіть відсоток для заощадження:
				<input type="number" value={percent} onChange={handlePercentChange} />
			</label>
			<br />
			<label>
				Введіть термін у днях:
				<input type="number" value={period} onChange={handlePeriodChange} />
			</label>
			<br />
			<button onClick={handleCalculate}>Обрахувати</button>
			<div ref={outputRef}></div>
		</div>
	)
}	  

export default SumArea;