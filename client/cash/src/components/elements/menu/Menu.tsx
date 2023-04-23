import './Menu.sass';

const changeArea = (num: number) => {
    switch (num) {
        case 1:
            document.querySelector('.list')?.classList.remove('none');
            document.querySelector('.stats-wrapper')?.classList.add('none');
            break;
        case 2:
            document.querySelector('.list')?.classList.add('none');
            document.querySelector('.stats-wrapper')?.classList.remove('none');
            break;
    }
}

const Menu = () => {
    return(
        <div className='menu'>
            <button className="menu__btn" onClick={() => changeArea(1)}>Історія</button>
            <button className="menu__btn" onClick={() => changeArea(2)}>Статистика</button>
        </div>      
    )
}

export default Menu;