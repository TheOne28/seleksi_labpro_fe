
export const signUpFields = {
    heading: "Selamat Datang",
    title : "Sign Up",
    footer:{
        footer: "Sudah pernah di sini? Lakukan ",
        linkText: "log in",
        linkUrl: "/login",
    },
    button:{
        variant:"outline-primary",
        text:"Sign Up",
        type:"submit",
    },
    input: [
        {
            label: "Name",
            name: "name",
            id: "name",
            type: "text",
            isRequired: true,
            placeholder: "example",
            accept:"",
        },
        {
            label: "Username",
            name: "username",
            id: "username",
            type: "text",
            isRequired: true,
            placeholder: "example",
            accept:"",
        },
        {
            label: "Password",
            name: "password",
            id: "password",
            type: "password",
            isRequired: true,
            placeholder: "***********",
            accept:"",
        },
        {
            label: "Foto KTP",
            name : "foto-ktp",
            id: "foto-ktp",
            type: "file",
            isRequired: true,
            placeholder: "No file chosen",
            accept:"image/png, image/jpeg",
        }
    ]
}