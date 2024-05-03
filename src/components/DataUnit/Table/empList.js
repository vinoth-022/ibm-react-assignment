import axios from "axios";
import { useEffect, useState } from "react";
import DisplayEmployeeData from "./displayEmployeeData";
import CreateEmployeeData from "../createEmployeeData";
import Login from "../../login";


const EmpList = () => {

const [employeeData,setEmployeeData] = useState('')
const [isLoggedIn, setIsLoggedIn] = useState(false);



const fetchEmployeeData = () => {
    axios.get('http://localhost:8080/emp/get-all-emps')
        .then((resp) => {
            console.log(resp.data);
            setEmployeeData(resp.data);
        })
        .catch(error => {
            console.error('Error fetching employee data:', error);
        });
}

useEffect(() => {
    fetchEmployeeData();
}, [])

return(
    <>
    {employeeData && <DisplayEmployeeData data={employeeData} />}
    <Login onLoginSuccess = {setIsLoggedIn}/>
    {isLoggedIn && <CreateEmployeeData updateEmployeeList={fetchEmployeeData} />}

</>
)

}

export default EmpList