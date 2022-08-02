import NavbarBody from "../../components/navbarComponents/NavbarBody"
import Content from "../../components/profileComponents/Content"
import Photo from "../../components/profileComponents/Photo"
import {profile} from "../../constants/Profile"
import CSS from 'csstype';

const styles : CSS.Properties = {
    border: "solid",
    marginTop: "10%",
    marginLeft: "10%",
    width: "80%",
    height: "80%",
}


export function Profile(){
    return <>
        <NavbarBody type="customer"/>
        <div style={styles}>
            <Photo photoUrl={profile.photoUrl}></Photo>
            <Content></Content>
        </div>
    </>
}       