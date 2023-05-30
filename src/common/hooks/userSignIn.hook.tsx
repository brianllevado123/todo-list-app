import React from "react";
import auth from '@react-native-firebase/auth';
import {loginError, loginSuccess} from "../../reducers/userSession.reducer";

export const userSignInHook = (data, navigation, dispatch) => {
    auth()
        .signInWithEmailAndPassword(data.email, data.password)
        .then(() => {
            dispatch(loginSuccess(data.email))
        })
        .catch((error) => {
            console.error('Sign-in Error:', error.code);
            dispatch(loginError(error.code))
        });
}
