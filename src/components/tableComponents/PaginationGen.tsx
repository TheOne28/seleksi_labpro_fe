import Pagination from "react-bootstrap/Pagination";
import { PaginationParam } from "./Param";
import CSS from "csstype"

const styles: CSS.Properties = {
    marginTop: "10%",
}

export default function PaginationGen({
    start,
    end,
    active,
    handleClick,
}: PaginationParam){
    let items = [];
    
    for(let i = start; i <= end; i ++){
        items.push(
            <Pagination.Item key={i} active={i === active}>
                {i}
            </Pagination.Item>
        )
    }

    return (
        <div style={styles}>
            <Pagination>
                {items}
            </Pagination>
        </div>
    )

}