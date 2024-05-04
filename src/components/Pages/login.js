import { useState } from "react";

const Login = ({ setLoginStatus }) => {
    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [afterLoginMessage, setAfterLoginMessage] = useState('');

    const handleLoginInput = (evt) => {
        setLoginData({
            ...loginData,
            [evt.target.name]: evt.target.value
        });
    };

    const handleLoginSubmit = (evt) => {
        const loggeduser = JSON.parse(localStorage.getItem("user"))

        if (loginData.username === loggeduser.username && loginData.password === loggeduser.password) {
            setAfterLoginMessage(`Hi ${loginData.username}! You've logged in successfully!`);
            alert(`Hi ${loginData.username}! You've logged in successfully!`);
            setLoginData({ username: '', password: '' });
            setLoginStatus(true); 
        } else {
            setAfterLoginMessage(`Invalid credentials!`);
            alert(`Invalid credentials!`);
            setLoginData({ username: '', password: '' });
        }
        evt.preventDefault();
    };

    return (
        <>
            <h1>Login Component</h1>
            <p>Login to add employee</p>
            <form onSubmit={handleLoginSubmit}>
                <input type="text" name="username" value={loginData.username} onChange={handleLoginInput} />
                <input type="password" name="password" value={loginData.password} onChange={handleLoginInput} />
                <input type="submit" value="Login" />
            </form>
            <>
                <p>{afterLoginMessage && afterLoginMessage} </p>
            </>
        </>
    );
};

export default Login;
