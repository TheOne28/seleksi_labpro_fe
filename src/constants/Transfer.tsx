
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
            name:"username-dest",
            id:"username-dest",
            type:"text",
            isRequired: true,
            placeholder: "example",
            accept:"",
            option: [],
        },
        {
            label:"Amount",
            name: "amount",
            id: "amount",
            type:"text",
            isRequired: true,
            placeholder: "9999999",
            accept:"",
            option:[],
        },
        {
            label:"Currency",
            name:"currency",
            id:"currency",
            type:"select",
            isRequired:true,
            placeholder:"",
            accept:"",
            option:['A', 'B', 'C'],
        }
    ]

}