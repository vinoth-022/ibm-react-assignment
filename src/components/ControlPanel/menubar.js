import { Link } from "react-router-dom";

const Menubar = ({ loginStatus }) => {

    if (!loginStatus) {

        return (
            <>
                <ul>
                    <li> <Link to={'/'}>Home</Link> </li>
                    <li> <Link to={'/login'}>Login</Link> </li>
                    <li> <Link to={'/register'}>Register</Link> </li>
                </ul>
            </>
        );
    }

    else {
        return (
            <>
                <ul>
                    <li> <Link to={'/'}>Home</Link> </li>
                    <li> <Link to={'/emp'}>Display Employee</Link> </li>
                    <li> <Link to={'/createEmp'}>Add Employee</Link> </li>
                    <li> <Link to={'/login'}>Update/View profile</Link> </li>
                    <li> <Link to={'/logout'}>Logout</Link> </li>


                </ul>
            </>
        );
    }

}

export default Menubar