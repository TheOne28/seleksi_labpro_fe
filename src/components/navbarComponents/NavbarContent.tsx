import NavbarBrand from "./NavbarBrand";
import NavbarDropdown from "./NavbarDropdown";
import NavbarLink from "./NavbarLink";
import NavbarText from "./NavbarText";
import { ContentParam } from "./Param";

export default function NavbarContent({
    type,
    param,
}: ContentParam){

    if(type === "brand"){
        return (
            //@ts-ignore
            <NavbarBrand text={param.text} linkTo={param.linkTo}/>
        )
    }

    if(type === "dropdown"){
        return (
            //@ts-ignore
            <NavbarDropdown title={param.title} content={param.content}/>
        )
    }

    if(type === "link"){
        return (
            //@ts-ignore
            <NavbarLink text={param.text} linkTo={param.linkTo}/>
        )
    }

    if(type === "text"){
        return (
            //@ts-ignore
            <NavbarText content={param.content} />
        )
    }

    return(<></>)
}