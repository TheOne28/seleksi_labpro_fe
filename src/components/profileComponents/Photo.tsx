import Card from 'react-bootstrap/Card'
import { PhotoParam } from './Params'
import CSS from 'csstype'

const styles : CSS.Properties = {   
    border: "none",
} 

const photoStyles: CSS.Properties ={
    height: "clamp(6.25rem, -11.0577rem + 48.0769vw, 25rem)",
    width: "clamp(6.25rem, -11.0577rem + 48.0769vw, 25rem)",
    border:"none"
}

export default function Photo({
    photoUrl
}: PhotoParam){

    return(
            <Card style={styles} >
                <Card.Img variant="top" src={photoUrl} style={photoStyles}></Card.Img>
            </Card>
    )
}