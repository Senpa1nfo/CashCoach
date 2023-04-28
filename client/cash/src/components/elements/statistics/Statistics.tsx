import { switchButtons } from '../menu/Menu';
import './Statistics.sass';


const Statistics = () => {
    const btnsContent: any[] = [
        
    ];
    return (
        <div className="stats none">
            <button className="stats__btn stats__btn__active" onClick={() => {switchButtons(1, btnsContent, '.stats__btn', 'stats__btn__active')}}>За день</button>
            <button className="stats__btn" onClick={() => {switchButtons(2, btnsContent, '.stats__btn', 'stats__btn__active')}}>За тиждень</button>
            <button className="stats__btn" onClick={() => {switchButtons(3, btnsContent, '.stats__btn', 'stats__btn__active')}}>За місяць</button>
            <button className="stats__btn" onClick={() => {switchButtons(4, btnsContent, '.stats__btn', 'stats__btn__active')}}>За рік</button>
            <button className="stats__btn" onClick={() => {switchButtons(5, btnsContent, '.stats__btn', 'stats__btn__active')}}>За весь час</button>
        </div>
    )
}

export default Statistics;