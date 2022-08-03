export type Role = "CUSTOMER" | "ADMIN" | "NOTVERIFIED"

export interface UserIf {
    token: string,
    username : string,
    name : string,
    linkKtp : string,
    saldo : number,
    role : Role,
}