import React, { useState } from "react";


const Form = () => {
    let [inputField, setInputField] = useState({
        name: "",
        email: "",
        password: "",
    })


    function change(e) {
        let { name, value } = e.target;
        setInputField({ ...inputField, [name]: value })

    }

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault()

                console.log(inputField);
            }} >
                <label>
                    Name
                    <input type="text" name="name" onChange={change} />
                </label>
                <label>
                    Email
                    <input type="email" name="email" onChange={change} />
                </label>
                <label>
                    Password
                    <input type="password" name="password" onChange={change} />
                </label>
                <button type="submit" >Submit</button>
            </form>
        </>
    )
}

export default Form