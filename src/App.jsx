import React from 'react';
import s from './App.module.css'
import {Navbar} from "./Components/Navbar/Navbar";
import {Route} from "react-router-dom";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {News} from "./Components/News/News";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {LoginForm} from "./Components/Login/LoginForm";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";

function App() {
    return (
            <div className={s.appWrapper}>
                <HeaderContainer/>
                <Navbar/>
                <div className={s.content}>
                    <Route path={'/profile/:userId?'} render={()=><ProfileContainer/>}/>
                    <Route path={'/dialogs'} render={()=><DialogsContainer/>}/>
                    <Route path={'/login'} render={()=><LoginForm/>}/>
                    <Route path={'/users'} render={()=><UsersContainer/>}/>
                    <Route path={'/news'} render={()=><News/>}/>
                    <Route path={'/music'} render={()=><Music/>}/>
                    <Route path={'/settings'} render={()=><Settings/>}/>
                </div>
            </div>
    );
}

export default App;
