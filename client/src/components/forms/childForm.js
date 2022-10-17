import React, { useState } from "react";
// import  CREATE_USER from "../utils/apollo/mutations";

const UserForm = () => {

    const [ loginForm, setLoginForm ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const onChange = (e) => {
        const key = e.target.id
        setLoginForm({...loginForm, [e.target.id]: e.target.value});
    }

    const onSubmit = (e) => {
        // apollo query

        e.preventDefault();
        
    }


    return (

        <>

        <form className="border m-auto w-50">
        <div className="form-group">
            {/* <div className="row">/ */}
            <label>First Name: </label>
            {/* </div> */}
            <input id="firstName" type="text" onChange={onChange}></input>
        <div className="form-group">
            <label>Last Name: </label>
            <input id="lastName" type="text" onChange={onChange}></input>
        </div>
        <div className="form-group">
            <label>Age: </label>
            <input type="number" maxLength={2} id="age"></input>
        </div>

        </div>

        </form>

        </>
    )
}

export default UserForm;