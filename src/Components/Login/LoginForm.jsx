import React from 'react';
import {Login} from "./Login";
import {LoginReduxForm} from "./LoginReduxForm";

export const LoginForm = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

