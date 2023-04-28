import './Calculator.sass';

import SumArea from './sumArea/SumArea';
import CalcArea from './calcArea/CalcArea';
import { switchButtons } from '../menu/Menu';

const btnsContent: any[] = [
    '.sum-area',
    '.calc-area'
];

const Calculator = () => {
    return (
        <div className="calculator none">
            <div className="calcArea__buttons">
				<button className="calcArea__btn calcArea__btn__active" onClick={() => {switchButtons(1, btnsContent, '.calcArea__btn', 'calcArea__btn__active')}}>Суми</button>
				<button className="calcArea__btn" onClick={() => {switchButtons(2, btnsContent, '.calcArea__btn', 'calcArea__btn__active')}}>Відсотків</button>
			</div>
            <div className="sum-area">
                <SumArea/>
            </div>
            <div className="calc-area none">
                <CalcArea/>
            </div>
        </div>
    )
}

export default Calculator;