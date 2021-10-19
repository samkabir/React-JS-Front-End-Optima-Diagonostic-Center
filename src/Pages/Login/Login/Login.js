import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className="container-parent">
            <h2>Login</h2>
            <div className="m-3 p-3 form-container">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
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