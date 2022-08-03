import Header from "../components/formComponents/Header";
import FormBody  from "../components/formComponents/FormBody";
import { signUpFields } from "../constants/SignUp";
import ToastGen from "../components/toastComponents/ToastGen";
import React, {useState} from "react";
import { encodeImageToBase64 } from "../lib/base64";
import {signup} from "../lib/auth";
import uploadPhoto from "../lib/uploadPhoto";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


let fieldState = {}

export function SignUp(){
    const [signUpState, setSignUpState] = useState(fieldState)
    const [trySignUp, setTrySignUp] = useState(false);
    const [signUpSuccess, setSignUpSuccess] = useState(false);
    const [message, setMessage] = useState("");
    const [title, setTitle] = useState("");
    const [file, setFile] = useState(null);
    const [disable, setDisable] = useState(false);
    const navigate = useNavigate();

    const onClose = (e : React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element> | undefined) =>{
        setDisable(false);
        setTrySignUp(false);
        if(signUpSuccess){
            navigate('/');
        }else{
            setSignUpSuccess(false);
        }
    }
    const inputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        var value;

        if(event.target.type === "file"){
            //@ts-ignore
            const file = event.target.files[0];
            //@ts-ignore
            setFile(file);
            value = await encodeImageToBase64(file);
        }else{
            value = event.target.value;
        }
     
        setSignUpState({
            ...signUpState,
            [event.target.id]:value
        })
        
    }

    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSignUpState({
            ...signUpState,
            [event.target.id]:event.target.value
        })
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();

        try{
            //@ts-ignore
            const url = await uploadPhoto(file, signUpState.username)

            const body = {
                ...signUpState,
                linkKtp:url
            }

            await signup(body);

            setSignUpSuccess(true);
            setTrySignUp(true);
            setMessage("Sign Up success, please wait verification process");
            setTitle("Success!!");
            setDisable(true);
        } catch(err){
            console.log("Here");
            setSignUpSuccess(false);
            setTrySignUp(true);
            setTitle("Sign up failed");
            if(axios.isAxiosError(err)){
                //@ts-ignore
                setMessage(err.response?.data.data);
            }else{
                setMessage("Axios error");
            }
            setDisable(true);

        }

    }

    return (
        <>
            <Header heading = {signUpFields.heading} />
            <FormBody 
                param={signUpFields.input} 
                title={signUpFields.title}
                footer={signUpFields.footer}
                disable={signUpFields.disable || disable}
                option={[['']]}
                useFooter={signUpFields.useFooter}
                buttonParam={signUpFields.button}
                handleSubmit = {handleSubmit}
                inputChange = {inputChange}
                selectChange={selectChange}
                />
            {trySignUp && (
                <ToastGen title={title}
                          msg ={message}
                          handleClose={onClose} />
            )}
        </>
    )
}   