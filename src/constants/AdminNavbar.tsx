
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
                        linkTo: "/histTransfer",
                    }
                ]
            }
        },{
            type: "text",
            param : {
                content : [
                    {
                        text: "Vincent",
                        linkTo: "/vincent",
                    },
                    {
                        text: "Logout",
                        linkTo: "/logout",
                    }
                ]
            }
        }
    ]
}