import './Menu.sass';

const changeArea = (num: number) => {

    const btns = document.querySelectorAll('.menu__btn');
    const menu_btns = [
        document.querySelector('.list'),
        document.querySelector('.stats'),
        document.querySelector('.calculator')
    ];

    switch (num) {
        case 1:
            for (let i = 0; i < btns.length; i++) {
                i === 0 ? menu_btns[i]?.classList.remove('none') : menu_btns[i]?.classList.add('none');       
                i === 0 ? btns[i].classList.add('menu__btn__active') : btns[i].classList.remove('menu__btn__active');      
            }
            break;
        case 2:
            for (let i = 0; i < btns.length; i++) {
                i === 1 ? menu_btns[i]?.classList.remove('none') : menu_btns[i]?.classList.add('none');       
                i === 1 ? btns[i].classList.add('menu__btn__active') : btns[i].classList.remove('menu__btn__active');      
            }
            break;
        case 3:
            for (let i = 0; i < btns.length; i++) {
                i === 2 ? menu_btns[i]?.classList.remove('none') : menu_btns[i]?.classList.add('none');       
                i === 2 ? btns[i].classList.add('menu__btn__active') : btns[i].classList.remove('menu__btn__active');      
            }
            break;
    }
}

const Menu = () => {
    return(
        <div className='menu'>
            <button className="menu__btn menu__btn__active" onClick={() => changeArea(1)}>Історія</button>
            <button className="menu__btn" onClick={() => changeArea(2)}>Статистика</button>
            <button className="menu__btn" onClick={() => changeArea(3)}>Калькулятор</button>
        </div>      
    )
}

export default Menu;