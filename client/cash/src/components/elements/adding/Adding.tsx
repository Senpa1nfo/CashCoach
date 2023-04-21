import './Adding.sass';

const Adding = () => {
    return(
        <div className='adding'>
            <form action="" className="adding__form">
                <input type="text" className="adding__input" placeholder='Джерело доходу / ціль витрати'/>
                <input type="number" className="adding__input" placeholder='Введіть суму'/>
                <div className="adding__buttons">
                    <button type="submit" className="adding__btn">Додати прибуток</button>
                    <button type="submit" className="adding__btn">Додати витрату</button>
                </div>
            </form>
        </div>      
    )
}

export default Adding;