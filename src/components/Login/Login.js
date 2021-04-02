import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import "./Login.css";
import google from "../../image/google.png";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {

    const [user, setUser] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                console.log(user)
                setUser(user);
                setLoggedInUser(user)
                history.replace(from);
            }).catch((error) => {
                const email = error.email;
            });
    }

    return (
        <div className="login-div">
            <button className="google-btn" onClick={handleGoogleSignIn}>
                <img className="google-img" src={google} alt="" /> Sign In With Google</button>
        </div>
    );
};

export default Login;