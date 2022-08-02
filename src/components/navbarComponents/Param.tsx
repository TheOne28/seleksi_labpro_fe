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
    param : LinkParam | DropdownParam | TextParam 
}

export type NavbarParam = {
    bg : string,
    variant: string,
    content: ContentParam[],
}