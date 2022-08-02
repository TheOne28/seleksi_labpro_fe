import CSS from 'csstype'
import { HeaderParam } from './Param';

const styles: CSS.Properties = {
    color: '#263238',    
    fontSize: '64px',
    textAlign: 'center',
    marginTop: '5%',
    marginBottom: '20px',
    fontWeight: 900,
};

export default function Header({
    heading,
} : HeaderParam){
    return(
        <div style={styles}>
            {heading}
        </div>
    )
}

