import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = ({ setLoginStatus }) => {
    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [afterLoginMessage, setAfterLoginMessage] = useState('');
    const navigate = useNavigate()

    const handleLoginInput = (evt) => {
        setLoginData({
            ...loginData,
            [evt.target.name]: evt.target.value
        });
    };

    const handleLoginSubmit = async (evt) => {

        evt.preventDefault();

        try  {
            const response = await axios.post('http://localhost:5000/login', loginData);
            setAfterLoginMessage(response.data.message);
            setLoginStatus(true);
            navigate('/home');
        } catch (error) {
            setAfterLoginMessage('Invalid credentials');
            setLoginData({ username: '', password: '' });
        }
        
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
