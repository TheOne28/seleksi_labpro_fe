import CSS from 'csstype'
import { Link } from 'react-router-dom';
import { FooterParam } from './Param';

const styles: CSS.Properties = {
    color: '#263238',    
    fontSize: '20px',
    textAlign: 'center',
    paddingTop:  '10px',
    paddingBottom: '30px',
    fontWeight: 900,
};

export function Footer({
    footer,
    linkUrl,
    linkText,
} : FooterParam){
    return(
        <div style={styles}>
            <p>
                {footer} {' '}
                <Link to={linkUrl}>
                    {linkText}
                </Link>
            </p>
        </div>
    )
}