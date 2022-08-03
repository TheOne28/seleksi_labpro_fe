import Header from "../components/formComponents/Header"
import FormBody from "../components/formComponents/FormBody"
import { loginFields } from "../constants/Login"
import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import {useNavigate } from "react-router-dom";
import {useCookies} from "react-cookie";
import ToastGen from "../components/toastComponents/ToastGen";

let fieldState = {};

export function Login(){
    const [loginState, setLoginState] = useState(fieldState);
    const [loginValid, setLoginValid] = useState(false);
    const [tryLogin, setTryLogin] = useState("");
    const {isLogged, loginUser, user} = useAuth();
    const [disable, setDisable] = useState(false);
    const [token, setToken] = useCookies(['token']);
    const navigate = useNavigate();

    const onClose = (e : React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element> | undefined) =>{
        setTryLogin("");
        setDisable(false);
    }

    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setLoginState({
            ...loginState,
            [event.target.id]:event.target.value
        })
    }

    const selectChange = (event : React.ChangeEvent<HTMLSelectElement>) => {
        setLoginState({
            ...loginState,
            [event.target.id]:event.target.value
        })
    }

    const handleSubmit= async (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();

        const data = await loginUser(loginState);
        if(data.status === "Success"){
            setToken('token', data.data.token);
            setLoginValid(true);
        }else{
            setDisable(true);
        }
        setTryLogin(data.data as string)
        
    };

    useEffect(() => {
        if(isLogged && loginValid){
            if(user?.role === "ADMIN"){
                navigate('/admin');
            }else if(user?.role === "CUSTOMER"){
                navigate('/profile');
            }
        }
    }, [isLogged, navigate, user, loginValid]);

    return (
        <>
            <Header heading={loginFields.heading}/>
            <FormBody 
                param={loginFields.input} 
                title={loginFields.title}
                useFooter={loginFields.useFooter}
                footer={loginFields.footer}
                buttonParam={loginFields.button}
                option={[['']]}
                disable={loginFields.disable || disable}
                handleSubmit = {handleSubmit}
                inputChange = {inputChange}
                selectChange={selectChange}
                />
            {!loginValid && tryLogin !== "" && (
                <ToastGen title={"Login failed"}
                          //@ts-ignore
                          msg ={tryLogin}
                          handleClose={onClose} />
            )}
        </>
    )
}