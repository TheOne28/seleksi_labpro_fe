import Header from "../components/authComponents/Header";
import FormBody  from "../components/authComponents/FormBody";
import { signUpFields } from "../constants/SignUp";
import React, {useState} from "react";
import { encodeImageToBase64 } from "../lib/base64";

let fieldState = {}

export function SignUp(){
    const [signUpState, setSignUpState] = useState(fieldState)
    
    const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        var value;

        if(event.target.type === "file"){
            //@ts-ignore
            const file = event.target.files[0];
            value = await encodeImageToBase64(file);
        }else{
            value = event.target.value;
        }
     
        setSignUpState({
            ...signUpState,
            [event.target.id]:value
        })
        
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();

        console.log("Success");
        console.log(signUpState);
    }

    return (
        <>
            <Header heading = {signUpFields.heading} />
            <FormBody 
                param={signUpFields.input} 
                title={signUpFields.title}
                footer={signUpFields.footer}
                buttonParam={signUpFields.button}
                handleSubmit = {handleSubmit}
                handleChange = {handleChange}
                />
        </>
    )
}   