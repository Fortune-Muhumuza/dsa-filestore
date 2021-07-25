import React from 'react'
import { auth, provider } from '../firebase'
import { useSelector, useDispatch } from 'react-redux'
import {authenticate} from '../store/reducers/authSlice'

const Login = () => {

    const dispatch = useDispatch()
    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            const credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;

            dispatch(authenticate({token, user}))

            console.log(user)
            console.log(token)
        }).catch((error) => alert(error.message))
    }
    return (
        <div>
            <h1>Login</h1>
            <button onClick={signIn}>Sign In</button>
        </div>
    )
}

export default Login
