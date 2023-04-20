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
  }, []);

  if (!store.isAuth) {
    return (
      <LoginForm/>
    )
  }

  return (
    <div className="App">
      <h1>{store.isAuth ? "Пользователь авторизован" : "Войдите"}</h1>
      <h1>{store.user.isActivated ? "Аккаунт активирован" : "Активируйте аккаунт"}</h1>
      <button onClick={() => store.logout()}>Выйти</button>
    </div>
  );
}

export default observer(App);
