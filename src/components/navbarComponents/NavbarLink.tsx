import Nav from "react-bootstrap/Nav";
import { LinkParam } from "./Param";

export default function NavbarLink({
    text, 
    linkTo,
} : LinkParam){
    return(
        <Nav.Link href={linkTo}>{text}</Nav.Link> 
    )
}   