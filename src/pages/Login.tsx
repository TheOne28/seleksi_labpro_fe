import Header from "../components/formComponents/Header"
import FormBody from "../components/formComponents/FormBody"
import { loginFields } from "../constants/Login"
import React, { useState } from "react";

let fieldState = {};

export function Login(){
    const [loginState, setLoginState] = useState(fieldState);

    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setLoginState({
            ...loginState,
            [event.target.id]:[event.target.value]
        })
    }

    const selectChange = (event : React.ChangeEvent<HTMLSelectElement>) => {
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
                useFooter={loginFields.useFooter}
                footer={loginFields.footer}
                buttonParam={loginFields.button}
                handleSubmit = {handleSubmit}
                inputChange = {inputChange}
                selectChange={selectChange}
                />
        </>
    )
}