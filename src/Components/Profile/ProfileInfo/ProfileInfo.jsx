import React from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import {updateStatus} from "../../../Redux/profile-reducer";

export const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            {/*<div className={s.wall}>
                <img src="https://i.pinimg.com/originals/53/3e/6f/533e6f453782ba67b9a034dfc221a212.jpg" alt=""/>
            </div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/> 
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
};

