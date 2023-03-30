import React, {useState} from "react";
import { HashLink as Link } from 'react-router-hash-link';

    const Register = (props) => {
    const {email, setEmail} = useState('');
    const {password, setPassword} = useState('');
    const {name, setName} = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>REGISTER</h2>
        <form className="Register-form" onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input value={name} name="name" id="name" placeholder="Full Name" />
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="sample@gmail.com" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)}type="password" placeholder="********" name="password" />
            <button type="submit">Submit</button>
        </form>
        <Link to="/login" className="link-button">Already have an account? Login here.</Link>
        </div>
    )
}
export default Register