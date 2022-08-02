import Navbar from 'react-bootstrap/Navbar'
import { TextParam } from './Param'

export default function NavbarText({
    content
}: TextParam){
    return (
        <Navbar.Collapse className='justify-content-end'>
            {
                content.map(each => 
                    <Navbar.Text>
                        <a href={each.linkTo}>{each.text}{' '}</a>
                    </Navbar.Text>
                )
            }
        </Navbar.Collapse>
    )
}