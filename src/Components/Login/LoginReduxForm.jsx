import React from 'react';
import {reduxForm} from "redux-form";
import {Login} from "./Login";

export const LoginReduxForm = reduxForm( {
    form:'login'
}) (Login)

