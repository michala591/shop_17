import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";



function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login Form Submitted:', { email, password });

        // Check if credentials are correct (You can replace this with actual login logic)
        if (email && password) {
            setIsLoggedIn(true);
            alert("Login was successful!");
            navigate("/")
        } else {
            setIsLoggedIn(false);
            alert("Invalid credentials. Please try again.");
        }
    };



    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login