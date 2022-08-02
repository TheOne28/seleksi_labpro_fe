import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import CSS from 'csstype';

const styles : CSS.Properties = {
    paddingTop: "0%",
}

export default function Content(){
    return  (
        <Container style={styles}>
            <Row>Profil</Row>
            <Row>Username: Vincent</Row>
            <Row>Password: vincent</Row>
            <Row>Name: Vincent</Row>
            <Row>Saldo: 000000</Row>
        </Container>
    )
}