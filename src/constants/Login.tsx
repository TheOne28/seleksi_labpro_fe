
export const loginFields = {
    heading: "Halo!",
    title: "Login",
    useFooter:true,
    disable: false,
    footer: {
        footer: "Baru pertama kali? Silahkan lakukan ",
        linkText: "sign up",
        linkUrl: "/signup"
    },
    button:{
        variant:"outline-primary",
        text:"Login",
        type:"submit",
    },
    input: [
        {
            label: "Username",
            name: "username",
            id: "username",
            type: "text",
            isRequired: true,
            placeholder:"example",
            accept: "",
            option: []
        },
        {
            label: "Password",
            name: "password",
            id: "password",
            type: "password",
            isRequired: true,
            placeholder:"************",
            accept: "",
            option: [],
        }
    ]   
}
