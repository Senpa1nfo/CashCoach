import {useContext, useEffect, useState} from 'react';
import { Context } from '.';
import { observer } from 'mobx-react-lite';

import Header from './components/elements/header/Header';
import Adding from './components/elements/adding/Adding';
import Menu from './components/elements/menu/Menu';
import WorkingArea from './components/elements/workingArea/WorkingArea';

const App = () => {

	const {store} = useContext(Context);
	const [changeBoolean, setChangeBoolean] = useState<boolean>();

	const getBool = (bool: boolean) => {
		setChangeBoolean(bool);
	}

	useEffect(() => {
		if (localStorage.getItem('token')) {
			store.checkAuth();
		}
	}, [store]);

	if (!store.isAuth) {
		return (
			<Header/>
		)
	}

	return (
		<div>
            <Header></Header>
            <main>
                <Adding getChangeBool={getBool}></Adding>
                <div className="main-area-wrapper">
                    <Menu></Menu>
					<WorkingArea getBool={changeBoolean}></WorkingArea>
                </div>
            </main>
        </div>     
	);
}

export default observer(App);
