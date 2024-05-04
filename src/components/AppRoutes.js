import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./login";
import Home from "./home";
import Page404 from "./page404";
import Menubar from "./ControlPanel/menubar";
import Logout from "./logout";
import { useState } from "react";
import EmpList from "./DataUnit/Table/empList";
import CreateEmployeeData from "./DataUnit/createEmployeeData";



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
                        <Route path="logout" element={<Logout setLoginStatus={updateLoginStatus} />} />
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
                        <Route exact path="/" element={<Home />} />
                        <Route path="*" element={<Page404 loginStatus={isLoggedIn} />} />
                    </Routes>
                </BrowserRouter>
            </>
        );
    }
};

export default AppRoutes;