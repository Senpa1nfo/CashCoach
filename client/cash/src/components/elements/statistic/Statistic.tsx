import './Statistic.sass';

const Statistic = () => {
    return(
        <div className='statistic'>
            <button className="statistic__btn">Статистика за день</button>
            <button className="statistic__btn">Статистика за тиждень</button>
            <button className="statistic__btn">Статистика за місяць</button>
            <button className="statistic__btn">Статистика за рік</button>
        </div>      
    )
}

export default Statistic;