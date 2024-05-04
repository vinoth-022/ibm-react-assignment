import axios from "axios";
import { useEffect, useState } from "react";
import DisplayEmployeeData from "./displayEmployeeData";


const EmpList = () => {

    const [employeeData, setEmployeeData] = useState('')


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

    return (
        <>
            {employeeData && <DisplayEmployeeData data={employeeData} />}
        </>
    )

}

export default EmpList