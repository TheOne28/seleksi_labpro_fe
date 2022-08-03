import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import CSS from 'csstype';
import { UserIf } from '../../models/UserIf';

const containerStyles : CSS.Properties = {
    lineHeight: "2",
}

const styles : CSS.Properties = {
    fontSize: "3rem",
    marginBottom: "50px",
    paddingTop: "0",
    display: "flex",
    alignItems : "top",
}

const usernameStyles : CSS.Properties = {
    marginTop : "50px",
    fontWeight : "bold",
}

export default function Content({
    username,
    name,
    saldo,
}:UserIf){
    console.log(username);
    console.log("In");
    return  (
        <Container style={containerStyles}>
            <Row style={styles}>Profil</Row>
            <Row style={usernameStyles}>Username: {username}</Row>
            <Row>Name: {name}</Row>
            <Row>Saldo: {saldo}</Row>
        </Container>
    )
}