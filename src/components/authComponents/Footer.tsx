import CSS from 'csstype'

type FooterParam = {
    footer: string,
}

const styles: CSS.Properties = {
    color: '#263238',    
    fontSize: '24px',
    textAlign: 'center',
    paddingTop:  '10px',
    paddingBottom: '30px',
    fontWeight: 900,
};

export default function Footer({
    footer,
} : FooterParam){
    return(
        <div style={styles}>
            {footer }
        </div>
    )
}