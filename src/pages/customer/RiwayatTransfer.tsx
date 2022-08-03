import NavbarBody from "../../components/navbarComponents/NavbarBody"
import PaginationGen from "../../components/tableComponents/PaginationGen"



export function RiwayatTransfer(){
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {

    }

    return (
        <>
            <NavbarBody type="customer"></NavbarBody>
            <PaginationGen start={1}
                           end={5}
                           active={1}
                           handleClick={handleClick} />
        </>
    )
}