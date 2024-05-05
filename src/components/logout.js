import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogOut = ({setLoginStatus}) => {
    const navigate = useNavigate()

    const handleLogOut=()=>{
        setLoginStatus(false)
        navigate('/login')
    }
    return (
        <div>
            <button onClick={()=>handleLogOut()}>LogOut</button>
        </div>
    );
}

export default LogOut