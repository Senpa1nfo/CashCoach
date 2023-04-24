import {useContext, useEffect} from 'react';
import { Context } from '.';
import { observer } from 'mobx-react-lite';

import Header from './components/elements/header/Header';
import Adding from './components/elements/adding/Adding';
import Menu from './components/elements/menu/Menu';
import WorkingArea from './components/elements/workingArea/WorkingArea';


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
			<Header/>
		)
	}

  	// const SendLinkButton = () => {
	// 	return (
	// 		<div>
	// 			Активируйте Аккаунт
	// 			<button onClick={() => store.sendLink()}>Отправить письмо</button>
	// 		</div>			
	// 	)
	// }

	return (
		<div>
            <Header></Header>
            <main>
                <Adding></Adding>
                <div className="main-area-wrapper">
                    <Menu></Menu>
					<WorkingArea></WorkingArea>
                </div>
            </main>
        </div>     
	);
}

export default observer(App);
