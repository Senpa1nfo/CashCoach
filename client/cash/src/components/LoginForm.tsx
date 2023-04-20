import React, {FC, useState, useContext} from 'react';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';

const LoginForm: FC = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [email, setEmail] = useState<string>('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [password, setPassword] = useState<string>('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {store} = useContext(Context);
    return (
        <div>
            <input 
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="text" 
                placeholder='email'
            />
            <input 
                onChange={e => setPassword(e.target.value)}
                value={password}
                type="text" 
                placeholder='Пароль'
            />
            <button onClick={() => store.login(email, password)}>Вход</button>
            <button onClick={() => store.registration(email, password)}>Регистрация</button>
        </div>
    );
};

export default observer(LoginForm);