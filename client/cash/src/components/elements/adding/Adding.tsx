import './Adding.sass';
import { Context } from '../../..';
import { useContext, useState } from 'react';

const Adding = () => {

    document.querySelector('.adding__btn_1')?.addEventListener('click ',() => {
        console.log(123);
    })

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [description, setDescription] = useState<string>('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<string>('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {store} = useContext(Context);

    return (
        <div className="adding">
            <form action="" className="adding__form">
                <input 
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                    type="text" 
                    className="adding__input" 
                    placeholder="Прибуток / Витрата" 
                />
                <input 
                    onChange={e => setValue(e.target.value)}
                    value={value}
                    type="number" 
                    className="adding__input" 
                    placeholder="Введіть суму" 
                />
                <div className="adding__buttons">
                    <button className="adding__btn adding__btn_1" 
                        onMouseEnter={() => {
                            document.querySelector('.adding__btn_1')?.classList.add('adding__btn_z-index');
                            document.querySelector('.adding__btn_2')?.classList.remove('adding__btn_z-index');                            
                        }}
                        onClick={(event) => {
                            event.preventDefault(); 
                            store.add(description, value, true); 
                            document.querySelectorAll('input').forEach(element => {
                                element.value = '';
                            });
                        }}>
                        Прибуток
                    </button>
                    <button className="adding__btn adding__btn_2" 
                        onMouseEnter={() => {
                            document.querySelector('.adding__btn_1')?.classList.remove('adding__btn_z-index');
                            document.querySelector('.adding__btn_2')?.classList.add('adding__btn_z-index');
                        }}
                        onClick={(event) => {
                            event.preventDefault(); 
                            store.add(description, value, false); 
                            document.querySelectorAll('input').forEach(element => {
                                element.value = '';
                            });
                        }}>
                        Витрата
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Adding;
