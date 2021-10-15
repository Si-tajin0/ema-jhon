import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Create Account</h2>
                <form onSubmit="">
                    <input type="text" placeholder="Your name" />
                    <br />
                    <input type="email" name="" placeholder="Your Email" id="" />
                    <br />
                    <input type="password" name="" id="" placeholder="Your Password" />
                    <br />
                    <input type="password" name="" id="" placeholder="re-enter Password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <div>------------------or---------------</div>
                <button className="btn-regular">Google SIgn In</button>
            </div>
        </div>
    );
};

export default Register;