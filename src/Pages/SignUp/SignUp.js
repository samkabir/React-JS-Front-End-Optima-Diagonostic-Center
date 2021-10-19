import { getAuth, createUserWithEmailAndPassword } from '@firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');
    const [error, setError] = useState('');
    const auth = getAuth();
    

    const handleEmailChange = e =>{
        setEmail(e.target.value);
    }
    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }
    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if(password.length < 6){
            setError('Password Must be atleast 6 characters long! ');
            return
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
        })
        .catch(error =>{
            setError(error.message);
        })
    }

    return (
        <div className="container-parent">
            <div className="form-container">
                <h2>Register <FontAwesomeIcon icon={faUserPlus} /></h2>
                <form onSubmit={handleRegistration}>
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" onBlur={handleEmailChange} className="form-control" id="inputEmail3" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" required />
                        </div>
                    </div>
                    <div className="row mb-3 text-danger">
                        {error}
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                    <br />
                    <br />
                    <h6>Already User? <Link to="/login">Login</Link></h6>
                </form>
            </div>
        </div>
    );
};

export default SignUp;