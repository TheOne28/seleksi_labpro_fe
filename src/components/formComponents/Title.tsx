import CSS from 'csstype';
import { HeaderParam } from './Param';

const styles: CSS.Properties = {
    color:'#263238',
    fontSize:'32px',
    paddingTop: '5px',  
    textAlign: 'center',
}

export default function Title({
    heading
}: HeaderParam){
    return (
        <div style={styles}>
            {heading}
        </div>
    )
}