import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NavbarContent from './NavbarContent'
import { NavbarParam } from './Param'

export default function NavbarBody({
    bg, 
    variant,
    content,
}: NavbarParam){
    return (
        <>  
            {/*@ts-ignore*/}
            <Navbar bg={bg} variant={variant} fixed='top'>
                <Container>
                    {
                        content.map(each => 
                            <NavbarContent type={each.type}
                                            param={each.param} />
                        )
                    }
                </Container>
            </Navbar>
        </>
    )
}