import NavbarBody from "../../components/navbarComponents/NavbarBody"
import FormBody from "../../components/formComponents/FormBody"
import { transferFields } from "../../constants/Transfer"
import React, { useState } from "react";

let fieldState = {};

export function Transfer(){
    const [transferState, setTransferState] = useState(fieldState);

    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setTransferState({
            ...transferState,
            [event.target.id]:[event.target.value]
        })
    }

    const selectChange = (event : React.ChangeEvent<HTMLSelectElement>) => {
        setTransferState({
            ...transferState,
            [event.target.id]:[event.target.value]
        })
    }

    const handleSubmit=(event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();

        console.log("Success");
        console.log(transferState  );
    }
    return (
        <>
            <NavbarBody type="customer"></NavbarBody>
            <FormBody 
                param={transferFields.input} 
                title={transferFields.title}
                disable={false}
                useFooter={transferFields.useFooter}
                footer={transferFields.footer}
                buttonParam={transferFields.button}
                handleSubmit = {handleSubmit}
                inputChange = {inputChange}
                selectChange={selectChange}   />
        </>
    )
}