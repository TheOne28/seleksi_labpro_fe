
export const transferFields = {
    heading: "",
    title: "Transfer",
    useFooter: false,
    footer : {
        footer: "",
        linkText: "",
        linkUrl: "",
    },
    button:{
        variant:"outline-primary",
        text: "Submit",
        type: "submit",
    },
    input:[
        {
            label:"Username Dest",
            name:"target",
            id:"target",
            type:"text",
            isRequired: true,
            placeholder: "example",
            accept:"",
            ind:-1,
        },
        {
            label:"Amount",
            name: "amount",
            id: "amount",
            type:"number",
            isRequired: true,
            placeholder: "9999999",
            accept:"",
            ind:-1,
        },
        {
            label:"Currency",
            name:"currency",
            id:"currency",
            type:"select",
            isRequired:true,
            placeholder:"",
            accept:"",
            ind:0,
        }
    ]

}