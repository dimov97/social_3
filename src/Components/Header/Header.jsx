import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

export const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://freepngimg.com/save/119443-logo-akatsuki-pic-download-hq/2059x1425" alt=""/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login:<NavLink to={'/login'}>Login</NavLink>}
            </div>
            <div className={s.title}><span>S</span>ocial-<span>N</span>etwork</div>
        </header>
    );
};

