import './Calculator.sass';

import SumArea from './sumArea/SumArea';
import CalcArea from './calcArea/CalcArea';

const Calculator = () => {
    return (
        <div className="calculator none">
            <div className="sum-area">
                <SumArea/>
            </div>
            <div className="calc-area">
                <CalcArea/>
            </div>
        </div>
    )
}

export default Calculator;