
export const adminNavbarFields = {
    bg: "dark",
    variant:"dark",
    content:[
        {
            type: "brand",
            param : {
                text: "BNMO",
                linkTo: "",
            }
        },
        {
            type: "dropdown",
            param: {
                title: "Verifikasi",
                content: [
                    {
                        text: "Akun",
                        linkTo: "/verfAkun",
                    },
                    {
                        text: "Mutasi",
                        linkTo: "/verfmutasi",
                    },
                ]
            }
        },
        {
            type: "link",
            param : {
                text: "Search",
                linkTo : "/search",
            }
        },
    ],
    text: {
        content: [
            {
                text: "admin",
                linkTo: "/admin",
            },
            {
                text: "Logout",
                linkTo: "/logout",
            }
        ]
    }
}