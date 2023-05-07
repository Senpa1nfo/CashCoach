import './Header.sass';
import '../../../icons/logo.svg'
import logo from '../../../icons/logo.svg';
import sun from '../../../icons/light_theme_icon.svg';
import moon from '../../../icons/dark_theme_icon.svg';
import LoginForm from '../loginForm/LoginForm';
import Autorized from './autorized/Autorized';

import { Component } from 'react';

interface HeaderProps {}

interface HeaderState {
	theme: boolean;
}

class Header extends Component<HeaderProps, HeaderState> {
	constructor(props: HeaderProps) {
		super(props);

		this.state = {
			theme: true,
		};
	}

	switchTheme = () => {
		this.setState((prevState) => ({
			theme: !prevState.theme,
		}));
	};

	setEnglish = () => {
		const uaItem = document.querySelector('.ua');
		const engItem = document.querySelector('.eng');
		if (uaItem) {
			uaItem.classList.remove('header__language-switcher__item_active');
		}
		if (engItem) {
			engItem.classList.add('header__language-switcher__item_active');
		}
	};

	setUkrainian = () => {
		const uaItem = document.querySelector('.ua');
		const engItem = document.querySelector('.eng');
		if (engItem) {
			engItem.classList.remove('header__language-switcher__item_active');
		}
		if (uaItem) {
			uaItem.classList.add('header__language-switcher__item_active');
		}
	};

	render() {
		const { theme } = this.state;

		return (
		<header className="header">
			<div className="header__wrapper">
				<img src={logo} className="header__logo" alt="logo" />
				<div className="header__theme-switcher" onClick={this.switchTheme}>
					<img src={moon} alt="moon" />
					<img src={sun} alt="sun" />
					<div
					className={`header__theme-switcher__switcher ${
						theme ? 'header__theme-switcher__switcher_on' : ''
					}`}></div>
				</div>
			</div>

			<nav></nav>

			<div className="header__wrapper">
				<div className="header__language-switcher">
					<div
					className={`ua header__language-switcher__item ${
						theme ? '' : 'header__language-switcher__item_theme_dark'
					} ${theme ? 'header__language-switcher__item_active' : ''}`}
					onClick={this.setUkrainian}
					>
					UKR
					</div>
					<div className="header__divider"></div>
					<div
					className={`eng header__language-switcher__item ${
						theme ? '' : 'header__language-switcher__item_theme_dark'
					} ${!theme ? 'header__language-switcher__item_active' : ''}`}
					onClick={this.setEnglish}
					>
					ENG
					</div>
				</div>
				<Autorized />
			</div>
			<LoginForm />
		</header>
		);
  	}
}

export default Header;
