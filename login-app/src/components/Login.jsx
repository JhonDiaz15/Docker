import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
    const [from, setForm] = useState({
        username: '',
        password: ''
    });


    const handleChange = (e) => {
        setForm({
            ...from,
            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Username: ${from.username}, Password: ${from.password}`);
    };

    
    return (
        <div className="container mt-5">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="mt-4">
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                      className="form-control"
                        id="username"
                        name="username"
                        value={from.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={from.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">login</button>
            </form>
        </div>
    );
}

