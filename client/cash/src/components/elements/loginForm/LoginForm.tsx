import React, {FC, useState, useContext, useEffect} from 'react';
import { Context } from '../../../index';
import { observer } from 'mobx-react-lite';
import './LoginForm.sass';

const LoginForm: FC = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [email, setEmail] = useState<string>('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [password, setPassword] = useState<string>('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {store} = useContext(Context);

    return (
        <div className="login none">
            <div className="login__closeBtn" onClick={() => document.querySelector('.login')?.classList.add('none')}>
                    <span className="login__line login__line-1"></span>
                    <span className="login__line login__line-2"></span>
            </div>
            <div className='login__content'>
                <div className="login__title">Вхід/Реєстрація</div>
                <div className="login__form">
                    <input 
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        type="email" 
                        placeholder='email'
                    />
                    <input 
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        type="password" 
                        placeholder='Пароль'
                    />
                    <div className="login__wrapper">
                        <div className="login__inner-wrapper">
                            <button onClick={() => {store.login(email, password)}}>Вхід</button>
                            <button onClick={() => {store.registration(email, password); }}>Реєстрація</button>
                        </div>
                        <a href="/" className="login__forgot">Забули пароль?</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default observer(LoginForm);