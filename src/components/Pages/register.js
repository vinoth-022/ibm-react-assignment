import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios';


const Register = () => {
    const navigate = useNavigate()

    const [registerData,setRegisterData] = useState({ username: '', password: '',email: '' })

    const handleRegisterInput = (evt) => {
        setRegisterData({
            ...registerData,
            [evt.target.name]: evt.target.value
        })
    }

    const handleRegisterSubmit = async (evt) => {
        evt.preventDefault()

        try {
            await axios.post('/register', registerData);
            navigate('/login');
        } catch (error) {
            console.error('Error registering user', error);
        }
    };


    return (
        <>
            <h1>Register Component</h1>
            <form onSubmit={handleRegisterSubmit}>
                <label htmlFor="username">User Name: </label>
                <input type="text" name="username" id="firstname" value={registerData.username} onChange={handleRegisterInput} placeholder="Enter User Name"/>
                <br />
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" value={registerData.password} onChange={handleRegisterInput} placeholder="Enter Password"/>
                <br />
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" value={registerData.email} onChange={handleRegisterInput} placeholder="Enter Email"/>
                <br />

                <input type="submit" value="Register" />
            </form>
        </>
    );

}

export default Register