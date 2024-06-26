import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/login";
import Home from "./Pages/home";
import Page404 from "./Pages/page404";
import Menubar from "./ControlPanel/menubar";
import LogOut from "./logout";
import { useState } from "react";
import EmpList from "./DataUnit/Table/empList";
import CreateEmployeeData from "./DataUnit/createEmployeeData";
import Register from "./Pages/register";
import Profile from "./Pages/profile";



const AppRoutes = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const updateLoginStatus = (status) => {
        console.log(status);
        setIsLoggedIn(status);
    };


    if (isLoggedIn) {
        return (
            <>
                <BrowserRouter>
                    <Menubar loginStatus={isLoggedIn} />
                    <Routes>
                        <Route path="home" element={<Home />} />
                        <Route path="emp" element={<EmpList />} />
                        <Route path="logout" element={<LogOut setLoginStatus={updateLoginStatus} />} />
                        <Route exact path="profile" element={<Profile />} />
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="createEmp" element={<CreateEmployeeData />} />
                        <Route path="*" element={<Page404 loginStatus={isLoggedIn} />} />
                    </Routes>
                </BrowserRouter>
            </>
        );
    }
    else {
        return (
            <>
                <BrowserRouter>
                    <Menubar loginStatus={isLoggedIn} />
                    <Routes>
                        <Route path="home" element={<Home />} />
                        <Route path="login" element={<Login setLoginStatus={updateLoginStatus} />} />
                        <Route path="register" element={<Register />} />
                        <Route exact path="/" element={<Home />} />
                        <Route path="*" element={<Page404 loginStatus={isLoggedIn} />} />
                    </Routes>
                </BrowserRouter>
            </>
        );
    }
};

export default AppRoutes;