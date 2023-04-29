import './Menu.sass';

export const switchButtons = (num: number, data: any[], elements: string, active: string) => {

    const btns = document.querySelectorAll(elements);
    const btnsContent: any[] = [];
    data.forEach((element) => {
        btnsContent.push(document.querySelector(element));
    })

    for (let i = 0; i < btns.length; i++) {
        btns.forEach((element, index) => {
            index === (num - 1) ? element.classList.add(active) : element.classList.remove(active);
        })
        if (btnsContent) {
            btnsContent.forEach((element, index) => {
                index === (num - 1) ? element?.classList.remove('none') : element?.classList.add('none');
            })
        }
    }
}

export const switchChildButtons = (num: number, data: any[]) => {
    const btns: any[] = [];
    data.forEach((element) => {
        btns.push(document.querySelector(element));
    })

    btns.forEach((element, index) => {
        element.classList.add('none');
    })
}

const Menu = () => {
    const btnsContent: any[] = [
        '.list',
        '.stats',
        '.calculator'
    ];
    const btnsStatsContent: any[] = [
        '.stats-day',
        '.stats-week',
        '.stats-month',
        '.stats-year',
        '.stats-general',
    ];
    return(
        <div className='menu'>
            <button className="menu__btn menu__btn__active" onClick={() => {switchButtons(1, btnsContent, '.menu__btn', 'menu__btn__active'); switchChildButtons(1, btnsStatsContent) }}>Історія</button>
            <button className="menu__btn" onClick={() => {switchButtons(2, btnsContent, '.menu__btn', 'menu__btn__active'); switchChildButtons(2, btnsStatsContent) }}>Статистика</button>
            <button className="menu__btn" onClick={() => {switchButtons(3, btnsContent, '.menu__btn', 'menu__btn__active'); switchChildButtons(3, btnsStatsContent) }}>Калькулятор</button>
        </div>      
    )
}

export default Menu;