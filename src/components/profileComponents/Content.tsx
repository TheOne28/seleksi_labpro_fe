import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import CSS from 'csstype';

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

export default function Content(){
    return  (
        <Container style={containerStyles}>
            <Row style={styles}>Profil</Row>
            <Row style={usernameStyles}>Username: Vincent</Row>
            <Row>Password: vincent</Row>
            <Row>Name: Vincent</Row>
            <Row>Saldo: 000000</Row>
        </Container>
    )
}