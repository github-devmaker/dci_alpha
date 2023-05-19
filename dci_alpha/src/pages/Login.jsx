import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Login = (props) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        axios.get('http://websrv01.dci.daikin.co.jp/BudgetCharts/BudgetRestService/api/authen?username=' + username + '&password=' + password)
            .then(res => {
                if (res.status == 200) {
                    localStorage.setItem('login', true);
                    location.reload();
                }
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message)
            })
    }
    return (
        <>
            <form >
                <h1>Login Page</h1>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                <br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button type='button' onClick={handleLogin}>Sign In</button>
            </form>
        </>
    )
}

export default Login
