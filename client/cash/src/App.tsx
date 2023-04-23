import React, {useContext, useEffect} from 'react';
import { Context } from '.';
import { observer } from 'mobx-react-lite';

import Header from './components/elements/header/Header';
import Adding from './components/elements/adding/Adding';
import Search from './components/elements/search/Search';
import Menu from './components/elements/menu/Menu';
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
                    <Menu></Menu>
                    <Search></Search>
					<WorkingArea></WorkingArea>
                </div>
            </main>
        </div>     
	);
}

export default observer(App);
