export type FooterParam = {
    footer: string,
    linkText: string,
    linkUrl : string,
}

export type ButtonParam = {
    variant: string,
    text: string,
    type:string,
}

export type HeaderParam = {
    heading: string,
}

export type InputParam = {
    label: string,
    placeholder: string,
    type: string,
    isRequired: boolean,
    name: string,
    id: string,
    accept: string,
    ind: number,    
}

export type InputConfig = {
    param: InputParam,
    disable : boolean,
    option: string[][],
    inputChange: React.ChangeEventHandler<HTMLInputElement>
    selectChange: React.ChangeEventHandler<HTMLSelectElement>
}

export type FormParam = {
    param: InputParam[],
    title: string,
    useFooter: boolean,
    disable: boolean,
    option: string[][],
    footer: FooterParam,
    buttonParam: ButtonParam,
    handleSubmit : React.FormEventHandler<HTMLFormElement>,
    inputChange : React.ChangeEventHandler<HTMLInputElement>,
    selectChange : React.ChangeEventHandler<HTMLSelectElement>
}