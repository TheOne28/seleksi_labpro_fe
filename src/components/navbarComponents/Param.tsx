export type LinkParam = {
    text: string,
    linkTo : string,
}

export type DropdownParam = {
    title : string,
    content: LinkParam[],
}

export type TextParam = {
    content : LinkParam[],
}

export type ContentParam = {
    type: string,
    param : LinkParam | DropdownParam
}

export type NavbarParam = {
    bg : "light" | "dark" | undefined,
    variant: string,
    content: ContentParam[],
    text: TextParam,
}