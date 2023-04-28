import { switchButtons } from '../../menu/Menu';
import './CalcArea.sass';
import { useEffect, useState } from 'react';

const CalcArea = () => {
	
	// Расчёт сложного процента
	const [startSum, setStartSum] = useState(0);
	const [reFill, setReFill] = useState(0);
	const [sumPeriod, setSumPeriod] = useState(1);
	const [percent, setPercent] = useState(1);
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
			totalBalance.push((Math.floor(incomeForYears).toLocaleString()));	
			console.log([totalBalance, totalAccruedInterest, accruedInterest, accruedReFill]);
			return [totalBalance, totalAccruedInterest, accruedInterest, accruedReFill];
		}

		if (reFill === 0) {
			if (incomeForYears === 0) {
				accruedInterest.push(Math.floor((startSum * Math.pow((1 + ((percent / 100) / percentPeriod)), percentPeriod) - startSum)).toLocaleString());
				totalAccruedInterest.push(Math.floor(((startSum) * Math.pow((1 + ((percent / 100) / percentPeriod)), percentPeriod) - startSum)).toLocaleString());
				totalBalance.push(Math.floor((startSum)).toLocaleString());
				accruedReFill.push(Math.floor((0)).toLocaleString());

				incomeForYears = startSum * Math.pow((1 + ((percent / 100) / percentPeriod)), percentPeriod);
			} else {
				accruedInterest.push(Math.floor((incomeForYears * Math.pow((1 + ((percent / 100) / percentPeriod)), percentPeriod) - incomeForYears)).toLocaleString());
				totalAccruedInterest.push(Math.floor((incomeForYears * Math.pow((1 + ((percent / 100) / percentPeriod)), percentPeriod) - startSum)).toLocaleString());
				totalBalance.push(Math.floor((incomeForYears)).toLocaleString());
				accruedReFill.push('0');				

				incomeForYears = incomeForYears * Math.pow((1 + ((percent / 100) / percentPeriod)), percentPeriod);
			}
		} else {
			if (incomeForYears === 0) {
				accruedInterest.push(Math.floor(((startSum * Math.pow((1 + ((percent / 100) / percentPeriod)), percentPeriod)) + ((reFill * sumPeriod * (Math.pow((1 + ((percent / 100) / percentPeriod)), percentPeriod) - 1)) / ((percent / 100) / percentPeriod)) - startSum - reFill * reFillCounter * sumPeriod)).toLocaleString());
				totalAccruedInterest.push(Math.floor(((startSum * Math.pow((1 + ((percent / 100) / percentPeriod)), percentPeriod)) + ((reFill * sumPeriod * (Math.pow((1 + ((percent / 100) / percentPeriod)), percentPeriod) - 1)) / ((percent / 100) / percentPeriod)) - startSum - reFill * reFillCounter * sumPeriod)).toLocaleString());
				accruedReFill.push(Math.floor((reFill * reFillCounter * sumPeriod)).toLocaleString());
				totalBalance.push(Math.floor((startSum)).toLocaleString());

				incomeForYears = (startSum * Math.pow((1 + ((percent / 100) / percentPeriod)), percentPeriod)) + ((reFill * sumPeriod * (Math.pow((1 + ((percent / 100) / percentPeriod)), percentPeriod) - 1)) / ((percent / 100) / percentPeriod));
			} else {
				totalAccruedInterest.push(Math.floor(((incomeForYears * Math.pow((1 + ((percent / 100) / percentPeriod)), percentPeriod)) + ((reFill * sumPeriod * (Math.pow((1 + ((percent / 100) / percentPeriod)), percentPeriod) - 1)) / ((percent / 100) / percentPeriod)) - startSum - reFill * reFillCounter * sumPeriod)).toLocaleString());
				accruedReFill.push(Math.floor((reFill * reFillCounter * sumPeriod)).toLocaleString());
				accruedInterest.push(Math.floor(((incomeForYears * Math.pow((1 + ((percent / 100) / percentPeriod)), percentPeriod)) + ((reFill * sumPeriod * (Math.pow((1 + ((percent / 100) / percentPeriod)), percentPeriod) - 1)) / ((percent / 100) / percentPeriod)) - incomeForYears)).toLocaleString());
				totalBalance.push(Math.floor((incomeForYears)).toLocaleString());	

				incomeForYears = (incomeForYears * Math.pow((1 + ((percent / 100) / percentPeriod)), percentPeriod)) + ((reFill * sumPeriod * (Math.pow((1 + ((percent / 100) / percentPeriod)), percentPeriod) - 1)) / ((percent / 100) / percentPeriod));
			}
		}

		reFillCounter++;
		currentYear--;
		return countCompoundPercent();
	}

	countCompoundPercent();

	return (
		<div className='calcArea'>
			<h2>Калькулятор відсотків</h2>
			<div className='calcArea__wrapper'>
				<div className="calcArea__input">
					<div className='calcArea__row'>
						<div className='calcArea__col'>
							<label>Початкова сума:</label>
							<input 
								type="number" 
								step='1000' 
								min='0' max='99999999999' 
								value={startSum}
								onChange={e => setStartSum(Number(e.target.value))}
							/>
						</div>
						<div className='calcArea__col'>
							<label>Кількість років:</label>
							<input 
								type="number" 
								min='1' 
								max='100' 
								value={years}
								onChange={e => setYears(Number(e.target.value))}
							/>
						</div>
					</div>
					<div className='calcArea__row'>
						<div className='calcArea__col'>
							<label>Сума поповнення:</label>
							<input 
								type="number" 
								step="100" 
								min='0' max='9999999999' 
								value={reFill}
								onChange={e => setReFill(Number(e.target.value))}
							/>
						</div>
						<div className='calcArea__col'>
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
					<div className='calcArea__row'>
						<div className='calcArea__col'>
							<label>Річна відсоткова ставка (%):</label>
							<input 
								type="number" 
								step="1" 
								min='0' max='1000' 
								value={percent}
								onChange={e => setPercent(Number(e.target.value))}
							/>
						</div>
						<div className='calcArea__col'>
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
				</div>
				
				<div className="table calcArea__div-table">
					<table className="calcArea__table">
						<thead className='calcArea__table__head'>
							<tr>
								<th className="calcArea__table__th">Год</th>
								<th className="calcArea__table__th">Начальный баланс</th>
								<th className="calcArea__table__th">Суммарные пополнения</th>
								<th className="calcArea__table__th">Начисленные проценты</th>
								<th className="calcArea__table__th">Суммарный процент</th>
								<th className="calcArea__table__th">Итоговый баланс</th>
							</tr>
						</thead>
						<tbody className='calcArea__table__body'>
							{accruedReFill.map((element, index) => (
								<tr>
									<td className="calcArea__table__th">{index + 1}</td>
									<td className="calcArea__table__th">{totalBalance[index]}</td>
									<td className="calcArea__table__th">{element}</td>
									<td className="calcArea__table__th">{accruedInterest[index]}</td>
									<td className="calcArea__table__th">{totalAccruedInterest[index]}</td>
									<td className="calcArea__table__th">{totalBalance[index + 1]}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>	
			</div>
		</div>
	)
}

export default CalcArea;