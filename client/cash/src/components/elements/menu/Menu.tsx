import './Menu.sass';

// const changeArea = (num: number) => {

//     const btns = document.querySelectorAll('.menu__btn');

//     switch (num) {
//         case 1:
//             for (let i = 0; i < btns.length; i++) {
//                 i === 0 ? menu_btns[i]?.classList.remove('none') : menu_btns[i]?.classList.add('none');       
//                 i === 0 ? btns[i].classList.add('menu__btn__active') : btns[i].classList.remove('menu__btn__active');      
//             }
//             break;
//         case 2:
//             for (let i = 0; i < btns.length; i++) {
//                 i === 1 ? menu_btns[i]?.classList.remove('none') : menu_btns[i]?.classList.add('none');       
//                 i === 1 ? btns[i].classList.add('menu__btn__active') : btns[i].classList.remove('menu__btn__active');      
//             }
//             break;
//         case 3:
//             for (let i = 0; i < btns.length; i++) {
//                 i === 2 ? menu_btns[i]?.classList.remove('none') : menu_btns[i]?.classList.add('none');       
//                 i === 2 ? btns[i].classList.add('menu__btn__active') : btns[i].classList.remove('menu__btn__active');      
//             }
//             break;
//     }
// }

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

const Menu = () => {
    const btnsContent: any[] = [
        '.list',
        '.stats',
        '.calculator'
    ];
    return(
        <div className='menu'>
            <button className="menu__btn menu__btn__active" onClick={() => switchButtons(1, btnsContent, '.menu__btn', 'menu__btn__active')}>Історія</button>
            <button className="menu__btn" onClick={() => switchButtons(2, btnsContent, '.menu__btn', 'menu__btn__active')}>Статистика</button>
            <button className="menu__btn" onClick={() => switchButtons(3, btnsContent, '.menu__btn', 'menu__btn__active')}>Калькулятор</button>
        </div>      
    )
}

export default Menu;