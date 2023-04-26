import { useState } from 'react';

function Calculator() {
	const [principal, setPrincipal] = useState(0);
	const [interestRate, setInterestRate] = useState(0);
	const [compoundingPeriods, setCompoundingPeriods] = useState(1);
	const [years, setYears] = useState(1);
	const [simpleInterest, setSimpleInterest] = useState('');
	const [compoundInterest, setCompoundInterest] = useState('');

	const handlePrincipalChange = (event:React.ChangeEvent<HTMLInputElement>) => {
		setPrincipal(parseFloat(event.target.value));
  	}

	const handleInterestRateChange = (event:React.ChangeEvent<HTMLInputElement>) => {
		setInterestRate(parseFloat(event.target.value));
	}

	const handleCompoundingPeriodsChange = (event:React.ChangeEvent<HTMLInputElement>) => {
		setCompoundingPeriods(parseFloat(event.target.value));
  	}

	const handleYearsChange = (event:React.ChangeEvent<HTMLInputElement>) => {
		setYears(parseFloat(event.target.value));
  	}

	const calculateSimpleInterest = () => {
		const interest = (principal * interestRate * years) / 100;
		const formattedNumber = interest.toLocaleString();
		setSimpleInterest(formattedNumber);
	}

	const calculateCompoundInterest = () => {
		const total = principal * (1 + (interestRate / compoundingPeriods)) ** (compoundingPeriods * years);
		const formattedNumber = Math.floor(total).toLocaleString();
		setCompoundInterest(formattedNumber);
  	}

	return (
		<div>
			<h2>Калькулятор відсотків</h2>
			<div>
				<label>Початкова сума:</label>
				<input type="number" value={principal} min='0' max='900000' onChange={handlePrincipalChange} />
			</div>
			<div>
				<label>Річна відсоткова ставка (%):</label>
				<input type="number" step="0.01" min='0' max='100' value={interestRate} onChange={handleInterestRateChange} />
			</div>
			<div>
				<label>Кількість періодів складання на рік:</label>
				<input type="number" value={compoundingPeriods} onChange={handleCompoundingPeriodsChange} />
			</div>
			<div>
				<label>Кількість років:</label>
				<input type="number" min='1' max='100' value={years} onChange={handleYearsChange} />
			</div>
			<div>
				<button onClick={calculateSimpleInterest}>Обчислити простий відсоток</button>
				<button onClick={calculateCompoundInterest}>Обчислити складний відсоток</button>
			</div>
			<div>
				<label>Очікувана сума за простим відсотком:</label>
				<span>{simpleInterest}</span>
			</div>
			<div>
				<label>Очікувана сума за складним відсотком:</label>
				<span>{compoundInterest}</span>
			</div>
		</div>
	)
}

export default Calculator;