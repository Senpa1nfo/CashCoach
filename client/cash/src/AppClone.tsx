import React from 'react';
// import {useContext, useEffect} from 'react';
// import { Context } from '.';
import { observer } from 'mobx-react-lite';
import Header from './components/elements/header/Header';
import Adding from './components/elements/adding/Adding';
import Statistic from './components/elements/statistic/Statistic';
import Search from './components/elements/search/Search';
import List from './components/elements/list/List';

function App() {

	// const {store} = useContext(Context);

	// useEffect(() => {
	// 	if (localStorage.getItem('token')) {       
	// 		store.checkAuth();
	// 	}
	// // eslint-disable-next-line react-hooks/exhaustive-deps
	// }, []);

    return(
        <div>
            <Header></Header>
            <main>
                <Adding></Adding>
                <div className="wrapper">
                    <Statistic></Statistic>
                    <Search></Search>
                    <List></List>
                </div>
            </main>
        </div>      
    )
}

export default observer(App);
