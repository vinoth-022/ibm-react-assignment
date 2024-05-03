const DisplayEmployeeData = ({ data }) => {

    const DisplayData = data.map((info) => {
        return(
            <tr>
                <td>{info.employeeId}</td>
                <td>{info.firstname}</td>
                <td>{info.lastname}</td>
                <td>{info.salary}</td>
                <td>{info.email}</td>
            </tr>
        )
    })


    return(
        <>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>EmployeeID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Salary</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
            {DisplayData}
            </tbody>
        </table>
        </>
    )

}

export default DisplayEmployeeData