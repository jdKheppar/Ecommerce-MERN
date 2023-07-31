import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem("user");
        if (auth) {
            navigate("/");
        }
    })
    const collectData = async () => {
        console.warn(name, email, password);
        let result = await fetch("http://localhost:5000/register", {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await result.json();
        console.warn(result);
        localStorage.setItem("user", JSON.stringify(result));
        if (result) {
            navigate("/");
        }
    }
    return (
        <div className="register">
            <h1>Register</h1>
            <input className="input-field" type="text" placeholder="Enter your name"
                value={name} onChange={(e) => { setName(e.target.value) }} />
           
            <input className="input-field" type="email" placeholder="Enter your email"
                value={email} onChange={(e) => { setEmail(e.target.value) }} />

            <input className="input-field" type="password" placeholder="Enter your password"
                value={password} onChange={(e) => { setPassword(e.target.value) }} />
            <button className="submit-btn" onClick={collectData} type="button">Submit</button>
        </div>
    )
}

export default Signup;