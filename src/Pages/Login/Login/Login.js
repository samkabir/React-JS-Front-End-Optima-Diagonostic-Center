import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const auth = getAuth();
    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');
    const [error, setError] = useState('');
    const { signInUsingGoogle } = useAuth();

    const handleEmailChange = e =>{
        setEmail(e.target.value);
    }
    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }

    const handleLogin = () => {
        processLogIn(email, password);
    }
    const processLogIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
        })
        .catch(error =>{
            setError(error.message);
        });
    }
    return (
        <div className="container-parent">
            <h2>Login <FontAwesomeIcon icon={faSignInAlt} /></h2>
            <div className="m-3 p-3 form-container">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button onClick={handleLogin} variant="primary" type="submit">
                        Submit
                    </Button>
                    <div className="row mb-3 text-danger">
                        {error}
                    </div>
                </Form>
            </div>
            <p>New user? <Link to="/signup">Register Here!</Link> </p>
            <br />
            <h5>Or, Sign in with...</h5>
            <button onClick={signInUsingGoogle} className="btn btn-warning my-3"> Google Sign In</button>
        </div>
    );
};

export default Login;