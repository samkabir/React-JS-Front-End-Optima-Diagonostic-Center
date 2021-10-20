import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from '@firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../../hooks/useAuth';
import './Login.css';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const auth = getAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isRegister, setIsRegister] = useState(false);
    const { signInUsingGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_url)
        } )
    }

    //Getting Name Input
    const handleNameChange = e =>{
        setName(e.target.value);
    }

    //Getting Email Input
    const handleEmailChange = e =>{
        setEmail(e.target.value);
    }

    //Getting Password Input
    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }

    //Toggle Register
    const toggleLogin = e =>{
        setIsRegister(e.target.checked);
        console.log(isRegister);
    }

    //Login Function
    const processLogIn = () => {
        console.log(email, password);
        signInWithEmailAndPassword(auth, email, password)
        .then(result => { 
            const user = result.user;
            console.log(user);
            history.push(redirect_url);
            })
            .catch( error => {
            setError(error.message);
        });
    }

    //Handles Login and SignUp
    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if(password.length < 6){
            setError('Password Must be atleast 6 characters long! ');
            return
        }
        if(isRegister){
            registerNewUser(email, password);
        }else{
            processLogIn(email, password);
        }
    }

    //SignUp function
    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
            setUserName();
            history.push(redirect_url);
        })
        .catch(error =>{
            setError(error.message);
        })
    }

    //Setting UserName
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
        .then(result => console.log(result))
    }

    return (
        <div className="container-parent">
            <form onSubmit={handleRegistration} className="form-container p-5">
                <h2>{isRegister ? ' Register ' : ' Login ' }{isRegister ? <FontAwesomeIcon icon={faUserPlus} /> : <FontAwesomeIcon icon={faSignInAlt} /> }</h2>
                {isRegister && 
                    <div className="row mb-3">
                        <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" onBlur={handleNameChange} className="form-control" />
                        </div>
                    </div>
                }
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleEmailChange} type="email" className="form-control" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" onBlur={handlePasswordChange} className="form-control" />
                    </div>
                </div>
                <div className="row mb-3 text-danger">
                        {error}
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                    <div className="form-check">
                        <input onChange={toggleLogin} className="form-check-input" type="checkbox" />
                        <label className="form-check-label" htmlFor="gridCheck1">
                            New User?
                        </label>
                    </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">{isRegister ? ' Register ' : ' Login ' }</button>
            </form>
            <br />
            <h5>Or, Sign in with...</h5>
            <button onClick={handleGoogleLogin} className="btn btn-warning my-3"> Google Sign In <i className="fab fa-google"></i> </button>
        </div>
    );
};

export default Login;