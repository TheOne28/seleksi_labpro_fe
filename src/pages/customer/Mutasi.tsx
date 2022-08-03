import NavbarBody from "../../components/navbarComponents/NavbarBody"
import FormBody from "../../components/formComponents/FormBody"
import { mutasiFields } from "../../constants/Mutasi";
import React, { useState } from "react";

let fieldState = {};

export function Mutasi(){
    const [mutasiState, setMutasiState] = useState(fieldState);

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
    return (
        <>
            <NavbarBody type="customer"></NavbarBody>
            <FormBody 
                param={mutasiFields.input} 
                title={mutasiFields.title}
                useFooter={mutasiFields.useFooter}
                disable={false}
                footer={mutasiFields.footer}
                buttonParam={mutasiFields.button}
                handleSubmit = {handleSubmit}
                inputChange = {inputChange}
                selectChange={selectChange}   />
        </>
    )
}