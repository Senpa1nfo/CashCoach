import './Statistics.sass';

const Statistics = () => {
    return (
        <div className="stats-wrapper none">
            <button className="stats-wrapper__btn">Статистика за день</button>
            <button className="stats-wrapper__btn">Статистика за тиждень</button>
            <button className="stats-wrapper__btn">Статистика за місяць</button>
            <button className="stats-wrapper__btn">Статистика за рік</button>
        </div>
    )
}

export default Statistics;