import React, {useContext, useEffect} from 'react';
import { Context } from '.';
import { observer } from 'mobx-react-lite';
import LoginForm from './components/elements/loginForm/LoginForm';
import Header from './components/elements/header/Header';
import Adding from './components/elements/adding/Adding';
import Statistics from './components/elements/statistics/Statistics';
import Search from './components/elements/search/Search';
import List from './components/elements/list/List';
import WorkingArea from './components/elements/workingArea/WorkingArea';

function App() {

	const {store} = useContext(Context);

	useEffect(() => {
		if (localStorage.getItem('token')) {
			store.checkAuth();
		}
	}, []);

	if (!store.isAuth) {
		return (
			<Header/>
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
		<div>
            <Header></Header>
            <main>
                <Adding></Adding>
                <div className="wrapper">
                    <Statistics></Statistics>
                    <Search></Search>
					<WorkingArea></WorkingArea>
                </div>
            </main>
        </div>     
	);
}

export default observer(App);
