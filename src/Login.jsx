import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

    const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);

    }

    return (
        <div className="auth-form-container">
            <h2>LOGIN</h2>
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="sample@gmail.com" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)}type="password" placeholder="********" name="password" />
            <button type="submit">Submit</button>
        </form>
        <Link to="/register" className="link-button">Don't have an account? Register here.</Link>
        </div>
    )
}
export default Login