import './Statistics.sass';

const switchStat = (num: number) => {

    const btns = document.querySelectorAll('.stats__btn');
    
    switch (num) {
        case 1:
            btns.forEach((element, index) => {
                index === 0 ? element.classList.add('stats__btn__active') : element.classList.remove('stats__btn__active');
            })
            break;
        case 2:        
        btns.forEach((element, index) => {
            index === 1 ? element.classList.add('stats__btn__active') : element.classList.remove('stats__btn__active');
        })
        break;
        case 3:
            btns.forEach((element, index) => {
                index === 2 ? element.classList.add('stats__btn__active') : element.classList.remove('stats__btn__active');
            })
            break;
        case 4:
            btns.forEach((element, index) => {
                index === 3 ? element.classList.add('stats__btn__active') : element.classList.remove('stats__btn__active');
            })
            break;
        case 5:
            btns.forEach((element, index) => {
                index === 4 ? element.classList.add('stats__btn__active') : element.classList.remove('stats__btn__active');
            })
            break;
    }
}

const Statistics = () => {
    return (
        <div className="stats none">
            <button className="stats__btn stats__btn__active" onClick={() => {switchStat(1)}}>За день</button>
            <button className="stats__btn" onClick={() => {switchStat(2)}}>За тиждень</button>
            <button className="stats__btn" onClick={() => {switchStat(3)}}>За місяць</button>
            <button className="stats__btn" onClick={() => {switchStat(4)}}>За рік</button>
            <button className="stats__btn" onClick={() => {switchStat(5)}}>За весь час</button>
        </div>
    )
}

export default Statistics;