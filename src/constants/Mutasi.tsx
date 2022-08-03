export const mutasiFields = {
    heading: "",
    title: "Mutasi",
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
            label:"Amount",
            name: "amount",
            id: "amount",
            type:"text",
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
            ind:1,
        },
        {
            label:"Tipe",
            name:"tipe",
            id:"tipe",
            type:"select",
            isRequired:true,
            placeholder:"",
            accept:"",
            ind:0,
        }
    ]

}