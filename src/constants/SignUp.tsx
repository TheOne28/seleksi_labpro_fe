
export const signUpFields = {
    heading: "Selamat Datang",
    title : "Sign Up",
    disable : false,
    useFooter:true,
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
            ind:-1,
        },
        {
            label: "Username",
            name: "username",
            id: "username",
            type: "text",
            isRequired: true,
            placeholder: "example",
            accept:"",
            ind:-1,
        },
        {
            label: "Password",
            name: "password",
            id: "password",
            type: "password",
            isRequired: true,
            placeholder: "***********",
            accept:"",
            ind:-1,
        },
        {
            label: "Foto KTP",
            name : "fotoKtp",
            id: "fotoKtp",
            type: "file",
            isRequired: true,
            placeholder: "No file chosen",
            accept:"image/png, image/jpeg",
            ind:-1,
        }
    ]
}