import React from 'react';
import './loginBox.css';
import { FaUser, FaLock } from 'react-icons/fa';
import { HiCursorClick } from 'react-icons/hi';

const LoginBox = () => {
    return (
        <div className='cierzo-games_login-box'>
            <h2>Iniciar sesión</h2>
            <form>
                <div className='cierzo-games_login-user-pass-box'>
                    <FaUser />
                    <input type='text' name='user' title='user' required />
                    <label>Usuario</label>
                </div>
                <div className='cierzo-games_login-user-pass-box'>
                    <FaLock />
                    <input type='password' name='pass' required />
                    <label>Password</label>
                </div>
                <div className='cierzo-games_login-end-container'>
                    <a href="#" className='cierzo-games_login-submit'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </a>
                    <span className='cierzo-games_login-register-text'>No tienes usuario? <a>Registrate <HiCursorClick /></a></span>
                </div>
            </form>
        </div>
    )
}

export default LoginBox