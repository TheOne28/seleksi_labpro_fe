import Card from 'react-bootstrap/Card'
import { PhotoParam } from './Params'
import CSS from 'csstype'

const styles : CSS.Properties = {   
    marginTop : "10%",
    marginLeft: "",
    marginRight: "20%",
    maxWidth: "20%",
    maxHeight: "50%",
    border: "solid",
    float:"right",

} 

export default function Photo({
    photoUrl
}: PhotoParam){

    return(
        <div style={styles}>
            <Card >
                <Card.Img variant="top" src={photoUrl}></Card.Img>
            </Card>
        </div>
    )
}