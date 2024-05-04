import { useState } from "react";
import axios from "axios";
import EmpList from "./Table/empList";


const CreateEmployeeData = () => {

    const [errors, setErrors] = useState({});
    const [EmployeeData, setEmployeeData] = useState({ address: '', email: '', firstname: '', lastname: '', salary: '' });
    const [displayTable, setDisplayTable] = useState(false)
    const [renderKey, setRenderKey] = useState(0);


    const handleLoginInput = (evt) => {
        console.log(evt.target.value); //v
        setEmployeeData({
            ...EmployeeData,
            [evt.target.name]: evt.target.value
        });
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        if (!EmployeeData.firstname.trim()) {
            newErrors.firstName = "First name is required";
            isValid = false;
        }

        if (!EmployeeData.lastname.trim()) {
            newErrors.lastName = "Last name is required";
            isValid = false;
        }

        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(EmployeeData.email)) {
            newErrors.email = "Invalid email address";
            isValid = false;
        }


        if (EmployeeData.salary <= 0 || isNaN(EmployeeData.salary)) {
            newErrors.salary = "Salary must be a positive number";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleOnSubmit = (evt) => {
        evt.preventDefault();
        if (validateForm()) {
            axios.post('http://localhost:8080/emp/add-emp', EmployeeData)
                .then(response => {
                    alert('Employee data saved successfully!');
                    setEmployeeData({ address: '', email: '', firstname: '', lastname: '', salary: '' })
                    setDisplayTable(true)
                    setRenderKey(prevKey => prevKey + 1);
                })
                .catch(error => {
                    console.error('Error saving employee data:', error);
                });
        }
    };

    return (
        <div key={renderKey}>

            <h1>Add an employee</h1>
            <form onSubmit={handleOnSubmit}>

                <label htmlFor="firstname">First Name:</label>
                <input type="text" id="firstname" name="firstname" value={EmployeeData.firstname} onChange={handleLoginInput} placeholder="Enter first name" required autoFocus />
                {errors.firstName && <span className="error">{errors.firstname}</span>}

                <br />

                <label htmlFor="lastname">Last Name:</label>
                <input type="text" id="lastname" name="lastname" value={EmployeeData.lastname} onChange={handleLoginInput} placeholder="Enter Last name" required />
                {errors.lastname && <span className="error">{errors.lastname}</span>}

                <br />

                <label htmlFor="salary">Salary :</label>
                <input type="number" id="salary" name="salary" value={EmployeeData.salary} onChange={handleLoginInput} placeholder="Enter salary" required />
                {errors.salary && <span className="error">{errors.salary}</span>}

                <br />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={EmployeeData.email} onChange={handleLoginInput} placeholder="Enter email" required />
                {errors.email && <span className="error">{errors.email}</span>}

                <br />

                <input type="submit" value="Submit" />
            </form>

            {displayTable && (
                <>
                    <h3>Updated record will be displayed below at the end of the table.</h3>
                    <EmpList />

                </>
            )}


        </div>
    );
}

export default CreateEmployeeData
