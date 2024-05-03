import { useState } from "react";
import axios from "axios";


const CreateEmployeeData = ({ updateEmployeeList }) => {

    
    const [EmployeeData, setEmployeeData] = useState({ address: '', email: '', firstname: '', lastname: '', salary: ''});

    const handleLoginInput = (evt) => {
        console.log(evt.target.value); //v
        setEmployeeData({
            ...EmployeeData,
            [evt.target.name]: evt.target.value
        });
    };

const handleOnSubmit = (evt) => {
    evt.preventDefault();

    axios.post('http://localhost:8080/emp/add-emp', EmployeeData)
        .then(response => {
            console.log('Employee data saved:', response.data);
            updateEmployeeList();
        })
        .catch(error => {
            console.error('Error saving employee data:', error);
        });

};


    return (
        <>
            <h1>Add an employee</h1>
            <form onSubmit={handleOnSubmit}>
  <input type="text" name="firstname" value={EmployeeData.firstname} onChange={handleLoginInput} placeholder="First Name" /><br />
  <input type="text" name="lastname" value={EmployeeData.lastname} onChange={handleLoginInput} placeholder="Last Name" /><br />
  <input type="number" name="salary" value={EmployeeData.salary} onChange={handleLoginInput} placeholder="Salary" /><br />
  <input type="email" name="email" value={EmployeeData.email} onChange={handleLoginInput} placeholder="Email" /><br />
  <input type="submit" value="Submit" />
</form>

        </>
    );
}

export default CreateEmployeeData
