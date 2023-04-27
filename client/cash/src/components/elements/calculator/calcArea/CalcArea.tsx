import { useState } from 'react';

const CalcArea = () => {
	
	const [startSum, setStartSum] = useState(1000);
	const [reFill, setReFill] = useState(100);
	const [sumPeriod, setSumPeriod] = useState(1);
	const [percent, setPercent] = useState(10);
	const [percentPeriod, setPercentPeriod] = useState(1);
	const [years, setYears] = useState(10);
	const [income, setIncome] = useState('');

	let incomeForYears = 0;
	let accruedReFill: string[] = [];
	let accruedInterest: string[] = [];
	let totalAccruedInterest: string[] = [];
	let totalBalance: string[] = [];
	let currentYear = years;
	let reFillCounter = 1;
	const countCompoundPercent = (): any => {
		if (currentYear === 0) {
			totalBalance.push((incomeForYears).toFixed(2));	
			console.log([totalBalance, totalAccruedInterest, accruedInterest, accruedReFill]);
			return [totalBalance, totalAccruedInterest, accruedInterest, accruedReFill];
		}

		if (reFill === 0) {
			if (incomeForYears === 0) {
				accruedInterest.push((incomeForYears * Math.pow((1 + ((percent / 100) / percentPeriod)), percentPeriod) - startSum).toFixed(2));
				totalAccruedInterest.push(((startSum) * Math.pow((1 + ((percent / 100) / percentPeriod)), percentPeriod) - startSum).toFixed(2));
				totalBalance.push((startSum).toFixed(2));

				incomeForYears = startSum * Math.pow((1 + ((percent / 100) / percentPeriod)), percentPeriod);
			} else {
				accruedInterest.push((incomeForYears * Math.pow((1 + ((percent / 100) / percentPeriod)), percentPeriod) - startSum).toFixed(2));
				totalAccruedInterest.push((incomeForYears * Math.pow((1 + ((percent / 100) / percentPeriod)), percentPeriod) - startSum).toFixed(2));
				totalBalance.push((incomeForYears).toFixed(2));				

				incomeForYears = incomeForYears * Math.pow((1 + ((percent / 100) / percentPeriod)), percentPeriod);
			}
		} else {
			if (incomeForYears === 0) {
				accruedInterest.push(((startSum * Math.pow((1 + ((percent / 100) / percentPeriod)), percentPeriod)) + ((reFill * sumPeriod * (Math.pow((1 + ((percent / 100) / percentPeriod)), percentPeriod) - 1)) / ((percent / 100) / percentPeriod)) - startSum - reFill * reFillCounter * sumPeriod).toFixed(2));
				totalAccruedInterest.push(((startSum * Math.pow((1 + ((percent / 100) / percentPeriod)), percentPeriod)) + ((reFill * sumPeriod * (Math.pow((1 + ((percent / 100) / percentPeriod)), percentPeriod) - 1)) / ((percent / 100) / percentPeriod)) - startSum - reFill * reFillCounter * sumPeriod).toFixed(2));
				accruedReFill.push((reFill * reFillCounter * sumPeriod).toFixed(2));
				totalBalance.push((startSum).toFixed(2));

				incomeForYears = (startSum * Math.pow((1 + ((percent / 100) / percentPeriod)), percentPeriod)) + ((reFill * sumPeriod * (Math.pow((1 + ((percent / 100) / percentPeriod)), percentPeriod) - 1)) / ((percent / 100) / percentPeriod));
			} else {
				totalAccruedInterest.push(((incomeForYears * Math.pow((1 + ((percent / 100) / percentPeriod)), percentPeriod)) + ((reFill * sumPeriod * (Math.pow((1 + ((percent / 100) / percentPeriod)), percentPeriod) - 1)) / ((percent / 100) / percentPeriod)) - startSum - reFill * reFillCounter * sumPeriod).toFixed(2));
				accruedReFill.push((reFill * reFillCounter * sumPeriod).toFixed(2));
				accruedInterest.push(((incomeForYears * Math.pow((1 + ((percent / 100) / percentPeriod)), percentPeriod)) + ((reFill * sumPeriod * (Math.pow((1 + ((percent / 100) / percentPeriod)), percentPeriod) - 1)) / ((percent / 100) / percentPeriod)) - startSum - reFill * reFillCounter * sumPeriod - Number(totalAccruedInterest[reFillCounter - 2])).toFixed(2));
				totalBalance.push((incomeForYears).toFixed(2));	

				incomeForYears = (incomeForYears * Math.pow((1 + ((percent / 100) / percentPeriod)), percentPeriod)) + ((reFill * sumPeriod * (Math.pow((1 + ((percent / 100) / percentPeriod)), percentPeriod) - 1)) / ((percent / 100) / percentPeriod));
			}
		}

		reFillCounter++;
		currentYear--;
		return countCompoundPercent();
	}

	return (
		<div>
			<h2>Калькулятор відсотків</h2>
			<div>
				<label>Початкова сума:</label>
				<input 
					type="number" 
					step='1000' 
					min='0' max='99999999999' 
					value={startSum}
					onChange={e => setStartSum(Number(e.target.value))}
				/>
			</div>
			<div>
				<div>
					<label>Сума поповнення:</label>
					<input 
						type="number" 
						step="100" 
						min='0' max='9999999999' 
						value={reFill}
						onChange={e => setReFill(Number(e.target.value))}
					/>
				</div>
				<div>
					<label>Періодичність:</label>
					<select name="" id=""
						value={sumPeriod}
						onChange={e => setSumPeriod(Number(e.target.value))}>
						<option value="1">Кожен рік</option>
						<option value="2">Кожні півроку</option>
						<option value="4">Кожен квартал</option>
						<option value="12">Кожен місяць</option>
					</select>
				</div>
			</div>	
			<div>
				<div>
					<label>Річна відсоткова ставка (%):</label>
					<input 
						type="number" 
						step="1" 
						min='0' max='1000' 
						value={percent}
						onChange={e => setPercent(Number(e.target.value))}
					/>
				</div>
				<div>
					<label>Періодичність:</label>
					<select name="" id=""
						value={percentPeriod}
						onChange={e => setPercentPeriod(Number(e.target.value))}>
						<option value="1">Кожен рік</option>
						<option value="2">Кожні півроку</option>
						<option value="4">Кожен квартал</option>
						<option value="12">Кожен місяць</option>
					</select>
				</div>
			</div>			
			<div>
				<label>Кількість років:</label>
				<input 
					type="number" 
					min='1' 
					max='100' 
					value={years}
					onChange={e => setYears(Number(e.target.value))}
				/>
			</div>
			<div>
				<button >Обчислити простий відсоток</button>
				<button 
					onClick={() => {
						const list: string[] = countCompoundPercent()[0];
						[totalBalance, totalAccruedInterest, accruedInterest, accruedReFill] = [[],[] ,[] ,[]];
						setIncome(list[list.length - 1])}}>
					Обчислити складний відсоток</button>
			</div>
			<div>
				<label>Очікувана сума за простим відсотком:</label>
				<span></span>
			</div>
			<div>
				<label>Очікувана сума за складним відсотком:</label>
				<span>{income}</span>
			</div>
		</div>
	)
}

export default CalcArea;