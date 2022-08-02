import Navbar from 'react-bootstrap/Navbar'
import { TextParam } from './Param'
import CSS from 'csstype'

const styles : CSS.Properties = {
    paddingRight : "10px",
    textAlign : "left",
}


export default function NavbarText({
    content
}: TextParam){
    return (
        <Navbar.Collapse className='justify-content-end'>
            {
                content.map(each => 
                    <Navbar.Text style={styles}>
                         <a href={each.linkTo}> {each.text}</a>
                    </Navbar.Text>
                )
            }
        </Navbar.Collapse>
    )
}