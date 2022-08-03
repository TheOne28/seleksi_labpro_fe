import NavbarBody from "../../components/navbarComponents/NavbarBody"
import FormBody from "../../components/formComponents/FormBody"
import { transferFields } from "../../constants/Transfer"
import React, { useEffect, useState } from "react";
import {useCookies} from "react-cookie";
import { currency, transfer } from "../../lib/transfer";

let fieldState = {};

export function Transfer(){
    const [transferState, setTransferState] = useState(fieldState);
    const [option, setOption] = useState([[""]]);
    const [token, setToken] = useCookies(['token']);
    const [first, setFirst] = useState(true);

    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setTransferState({
            ...transferState,
            [event.target.id]:event.target.value
        })
    }

    const selectChange = (event : React.ChangeEvent<HTMLSelectElement>) => {
        setTransferState({
            ...transferState,
            [event.target.id]:event.target.value
        })
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();

        const data = await transfer(transferState, token.token);
        console.log(data);
    }   

    const fillCurrency = async () => {
        const allcurrency = await currency();
        
        setOption([allcurrency])
        setFirst(false);
    }

    useEffect(() => {
        fillCurrency();
    })

    return (
        <>
            {first? (<></>) :
                (   <>            
                    <NavbarBody type="customer"></NavbarBody>
                    <FormBody 
                    param={transferFields.input} 
                    title={transferFields.title}
                    disable={false}
                    useFooter={transferFields.useFooter}
                    footer={transferFields.footer}
                    buttonParam={transferFields.button}
                    option={option}
                    handleSubmit = {handleSubmit}
                    inputChange = {inputChange}
                    selectChange={selectChange}   />
                    </>)
            }   
        </>
    )
}