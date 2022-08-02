import NavDropdown from "react-bootstrap/NavDropdown";
import { DropdownParam } from "./Param";

export default function NavbarDropdown({
    title,
    content
}: DropdownParam){
    return (
        <NavDropdown title={title} id="basic-nav-dropdown">
            {
                content.map(each =>
                    <NavDropdown.Item href={each.linkTo}>
                        {each.text}
                    </NavDropdown.Item>
                )
            }
        </NavDropdown>
    )
}