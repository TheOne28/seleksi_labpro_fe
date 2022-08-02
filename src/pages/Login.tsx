import Header from "../components/authComponents/Header"
import FormBody from "../components/authComponents/FormBody"
import { loginFields } from "../constants/Login"
import React, { useState } from "react";

let fieldState = {};

export function Login(){
    const [loginState, setLoginState] = useState(fieldState);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setLoginState({
            ...loginState,
            [event.target.id]:[event.target.value]
        })
    }

    const handleSubmit=(event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();

        console.log("Success");
        console.log(loginState  );
    }

    return (
        <>
            <Header heading={loginFields.heading}/>
            <FormBody 
                param={loginFields.input} 
                title={loginFields.title}
                footer={loginFields.footer}
                buttonParam={loginFields.button}
                handleSubmit = {handleSubmit}
                handleChange = {handleChange}
                />
        </>
    )
}