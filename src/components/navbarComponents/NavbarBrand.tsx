import Navbar from 'react-bootstrap/Navbar';
import {LinkParam} from './Param';

export default function NavbarBrand({
    text, 
    linkTo,
} : LinkParam){
    return(
        <Navbar.Brand href={linkTo}>{text}</Navbar.Brand> 
    )
}