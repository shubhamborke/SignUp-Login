const Welcome = (props) => {
    return  (
        <div>
            <h1 style={{color:"orange", backgroundColor:"#f4f4f4"}}>Welcome {props.value.name}</h1>
            <table>
                <tr>
                    <td>Name: </td>
                    <td style={{padding:"0 0 1em 4em", margin:"0 0 1em 4em"}}>{props.value.name}</td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td style={{padding:"0 0 1em 4em", margin:"0 0 1em 4em"}}>{props.value.email}</td>
                </tr>
                <tr>
                    <td>Mobile</td>
                    <td style={{padding:"0 0 1em 4em", margin:"0 0 1em 4em"}}>{props.value.mobile}</td>
                </tr>
                <tr>
                    <td>age</td>
                    <td style={{padding:"0 0 1em 4em", margin:"0 0 1em 4em"}}>{props.value.age}</td>
                </tr>
                <tr>
                    <td>Date of Birth</td>
                    <td style={{padding:"0 0 1em 4em", margin:"0 0 1em 4em"}}>{props.value.dateOfBirth}</td>
                </tr>
            </table>
        </div>
    )
}

export default Welcome
