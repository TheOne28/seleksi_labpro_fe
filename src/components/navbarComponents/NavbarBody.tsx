import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NavbarContent from './NavbarContent'
import Nav from 'react-bootstrap/Nav'
import { NavbarParam } from './Param'
import NavbarText from './NavbarText'

import { custNavbarFields } from '../../constants/CustomerNavbar'
import { adminNavbarFields } from '../../constants/AdminNavbar'

function CreateNavbar({
    bg, 
    variant,
    content,
    text
}: NavbarParam){
    return (
        <>  
            {/* @ts-ignore */}
            <Navbar bg={bg} variant={variant} fixed='top'>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {
                                content.map(each => 
                                    <NavbarContent type={each.type}
                                                    param={each.param} />
                                )
                            }
                        </Nav>
                        <Nav>
                            <NavbarText content={text.content} />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default function NavbarBody({
    type
}: {
    type: string,
}){
    if(type === "customer"){
        return(<>
                <CreateNavbar bg={custNavbarFields.bg as "light" | "dark" | undefined}
                    variant={custNavbarFields.variant}
                    content={custNavbarFields.content} 
                    text={custNavbarFields.text}/>
                </>
        )
    }

    return( <>
        <CreateNavbar bg={adminNavbarFields.bg as "light" | "dark" | undefined}
                    variant={adminNavbarFields.variant}
                    content={adminNavbarFields.content}
                    text={adminNavbarFields.text}/>
        </>
    )
}