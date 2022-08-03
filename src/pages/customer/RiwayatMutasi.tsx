import NavbarBody from "../../components/navbarComponents/NavbarBody"
import PaginationGen from "../../components/tableComponents/PaginationGen"
import BootstrapTable from 'react-bootstrap-table-next';
import CSS from 'csstype'

const styles: CSS.Properties = {
    marginTop: "5%",
}


export function RiwayatMutasi(){

    const columns = [{
        dataField: 'id',
        text: 'Product ID'
        }, {
        dataField: 'name',
        text: 'Product Name'
        }, {
        dataField: 'price',
        text: 'Product Price'
    }];

    const products = [
        {
            id: 1,
            name: "1",
            price: "1",
        }
    ]

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        
    }
    
    return (
        <>
            <NavbarBody type="customer"></NavbarBody>
            <div style={styles}>
                <BootstrapTable keyField='id' data={ products } columns={ columns }/>
            </div>
        </>
    )
}