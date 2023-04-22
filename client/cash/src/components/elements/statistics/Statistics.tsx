import './Statistics.sass';

const Statistics = () => {
    return(
        <div className='statistics'>
            <button className="statistics__btn">Статистика за день</button>
            <button className="statistics__btn">Статистика за тиждень</button>
            <button className="statistics__btn">Статистика за місяць</button>
            <button className="statistics__btn">Статистика за рік</button>
        </div>      
    )
}

export default Statistics;