import NavbarBody from "../../components/navbarComponents/NavbarBody"
import FormBody from "../../components/formComponents/FormBody"
import { mutasiFields } from "../../constants/Mutasi";
import React, { useState, useEffect } from "react";
import {useCookies} from 'react-cookie' ;
import { currency} from "../../lib/transfer";

let fieldState = {};

export function Mutasi(){
    const [mutasiState, setMutasiState] = useState(fieldState);
    const [option, setOption] = useState([['Pendapatan', 'Pengeluaran']]);
    const [token, setToken] = useCookies(['token']);
    const [first, setFirst] = useState(true);

    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setMutasiState({
            ...mutasiState,
            [event.target.id]:[event.target.value]
        })
    }

    const selectChange = (event : React.ChangeEvent<HTMLSelectElement>) => {
        setMutasiState({
            ...mutasiState,
            [event.target.id]:[event.target.value]
        })
    }

    const handleSubmit=(event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();

        console.log("Success");
        console.log(mutasiState);
    }

    const fillCurrency = async () => {
        const allcurrency = await currency();
        
        setOption([option[0], allcurrency])
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
                    param={mutasiFields.input} 
                    title={mutasiFields.title}
                    disable={false}
                    useFooter={mutasiFields.useFooter}
                    footer={mutasiFields.footer}
                    buttonParam={mutasiFields.button}
                    option={option}
                    handleSubmit = {handleSubmit}
                    inputChange = {inputChange}
                    selectChange={selectChange}   />
                    </>)
            }   
        </>
    )
}