
export const custNavbarFields = {
    bg: "dark",
    variant: "dark",
    content:[
        {
            type: "brand",
            param : {
                text: "BNMO",
                linkTo: "",
            }
        },
        {
            type: "link",
            param: {
                text: "Transfer",
                linkTo : "/transfer",
            }
        },
        {
            type: "link",
            param : {
                text: "Mutasi",
                linkTo : "/mutasi",
            }
        },
        {
            type: "dropdown",
            param: {
                title: "Riwayat",
                content: [
                    {
                        text: "Mutasi",
                        linkTo: "/histmutasi",
                    },
                    {
                        text: "Transfer",
                        linkTo: "/histtransfer",
                    }
                ]
            }
        }
    ],
    text:{
        content:[
            {
                text: "Vincent",
                linkTo: "/profile",
            },
            {
                text: "Logout",
                linkTo: "/logout",
            }
        ]
    }
}