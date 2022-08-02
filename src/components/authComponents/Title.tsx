import CSS from 'csstype';

type TitleParam = {
    title: string,
}

const styles: CSS.Properties = {
    color:'#263238',
    fontSize:'32px',
    paddingTop: '5px',  
    textAlign: 'center',
}

export default function Title({
    title
}: TitleParam){
    return (
        <div style={styles}>
            {title}
        </div>
    )
}