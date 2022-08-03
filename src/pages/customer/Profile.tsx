import NavbarBody from "../../components/navbarComponents/NavbarBody"
import Content from "../../components/profileComponents/Content"
import Photo from "../../components/profileComponents/Photo"
import {profile} from "../../constants/Profile"
import CSS from 'csstype';
import Container from "react-bootstrap/Container"
import Col  from "react-bootstrap/Col"
import Row  from "react-bootstrap/Row"
import useAuth  from "../../hooks/useAuth";
import { UserIf } from "../../models/UserIf";


const styles : CSS.Properties = {
    height: "100vh",
    alignItems:"center",
    justifyContent:"center",
}

const rowStyles : CSS.Properties = {
    width: "100vw",
}

const colStyles : CSS.Properties ={
    alignItems: "center",
    display : "flex",
    justifyContent: "center",
}

export function Profile(){
    const {user} = useAuth();

    return <>
        <NavbarBody type="customer"/>
        <Container className="d-flex" style={styles} fluid>
            <Row style={rowStyles}>
                <Col xs={12} md={6} style={colStyles}>
                    <div>
                        {/*@ts-ignore*/}
                        <Content username={user?.username}
                                //@ts-ignore
                                 saldo={user?.saldo}
                                 //@ts-ignore
                                 name={user.name}></Content>
                    </div>
                </Col>
                <Col xs={6} md ={6}>
                    {/*@ts-ignore*/}
                    <Photo photoUrl={user?.linkKtp}></Photo>
                </Col>
            </Row>
        </Container>
    </>
}       