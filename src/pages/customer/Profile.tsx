import NavbarBody from "../../components/navbarComponents/NavbarBody"
import { custNavbarFields } from "../../constants/CustomerNavbar"

export function Profile(){
    return <>
        <NavbarBody bg={custNavbarFields.bg}
                    variant={custNavbarFields.variant}
                    content={custNavbarFields.content} />
    </>
}