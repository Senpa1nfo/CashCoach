import './Header.sass';
import '../../../icons/logo.svg'
import logo from '../../../icons/logo.svg';
import sun from '../../../icons/light_theme_icon.svg';
import moon from '../../../icons/dark_theme_icon.svg';
import sign_up from '../../../icons/sign_up_icon.svg';

const Header = () => {
    return(
        <header>
            <div className="wrapper">
                <img src={logo} className="logo" alt='logo'/>
                <div className="theme-switcher">
                    <img src={moon} alt='moon'/>
                    <img src={sun} alt='sun'/>
                    <div className="theme-switcher__switcher"></div>
                </div>
            </div>
           
            <nav></nav>

            <div className="wrapper">
                <div className="language-switcher">
                    <div className="language-switcher__item_active">UKR</div>
                    <hr/>
                    <div className="language-switcher__item">ENG</div>
                </div>
                <button className="login-btn">
                    <img src={sign_up} alt="sign_up" className=""/>
                    <div className="login-btn__text">Вхід</div>
                </button>
            </div>

        </header>    
    )
}

export default Header;