import './Header.sass';
import '../../../icons/logo.svg'
import logo from '../../../icons/logo.svg';
import sun from '../../../icons/light_theme_icon.svg';
import moon from '../../../icons/dark_theme_icon.svg';
import sign_up from '../../../icons/sign_up_icon.svg';

const Header = () => {
    return(
        <header className="header">
            <div className="header__wrapper">
                <img src={logo} className="header__logo" alt='logo'/>
                <div className="header__theme-switcher">
                    <img src={moon} alt='moon'/>
                    <img src={sun} alt='sun'/>
                    <div className="header__theme-switcher__switcher"></div>
                </div>
            </div>
           
            <nav></nav>

            <div className="header__wrapper">
                <div className="header__language-switcher">
                    <div className="header__language-switcher__item_active">UKR</div>
                    <div className="header__diveder"></div>
                    <div className="header__language-switcher__item">ENG</div>
                </div>
                <button className="header__login-btn">
                    <img src={sign_up} alt="sign_up" className=""/>
                    <div className="header__login-btn__text">Вхід</div>
                </button>
            </div>
        </header>    
    )
}

export default Header;