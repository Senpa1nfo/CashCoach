import './Adding.sass';
import { useRef } from 'react';

const Adding = () => {

    const sourceInputRef = useRef<HTMLInputElement>(null);
    const amountInputRef = useRef<HTMLInputElement>(null);

    
    sourceInputRef.current && (sourceInputRef.current.value = '');
    amountInputRef.current && (amountInputRef.current.value = '');
    
  
    return (
        <div className="adding">
            <form action="" className="adding__form">
                <input type="text" ref={sourceInputRef} className="adding__input" placeholder="Джерело доходу / ціль витрати" />
                <input type="number" ref={amountInputRef} className="adding__input" placeholder="Введіть суму" />
                <div className="adding__buttons">
                    <button type="submit" className="adding__btn">
                        Додати прибуток
                    </button>
                    <button type="submit" className="adding__btn">
                        Додати витрату
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Adding;
