import NavbarBody from "../../components/navbarComponents/NavbarBody"
import {adminNavbarFields} from "../../constants/AdminNavbar"

export function Profile(){
    return <>
        <NavbarBody bg={adminNavbarFields.bg}
                    variant={adminNavbarFields.variant}
                    content={adminNavbarFields.content} />
    </>
}