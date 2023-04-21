import React, {useContext, useEffect} from 'react';
import LoginForm from './components/LoginForm';
import { Context } from '.';
import { observer } from 'mobx-react-lite';

function App() {

	const {store} = useContext(Context);

	useEffect(() => {
		if (localStorage.getItem('token')) {
			store.checkAuth();
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (!store.isAuth) {
		return (
			<LoginForm/>
		)
	}

  	const SendLinkButton = () => {
		return (
			<div>
				Активируйте Аккаунт
				<button onClick={() => store.sendLink()}>Отправить письмо</button>
			</div>			
		)
	}

	return (
		<div className="App">
		<h1>{store.isAuth ? "Пользователь авторизован" : "Войдите"}</h1>
		<h1>{store.user.isActivated ? "Аккаунт активирован" : <SendLinkButton></SendLinkButton>}</h1>
		<button onClick={() => store.logout()}>Выйти</button>
		</div>
	);
}

export default observer(App);
