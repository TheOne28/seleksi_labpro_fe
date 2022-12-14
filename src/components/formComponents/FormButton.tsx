import Button from 'react-bootstrap/Button'
import CSS from 'csstype'
import { ButtonParam } from './Param'

const stylesButton: CSS.Properties ={
    width: '80%',
}

const stylesDiv: CSS.Properties ={
    textAlign: "center",
    paddingBottom: "10px",
}

export function FormButton({
    variant,
    text,
    type,
}: ButtonParam){
    
    return(
        <div style={stylesDiv}>
            {/*@ts-ignore*/}
            <Button type={type}
                    variant={variant}
                    style={stylesButton}> 
                {text}
            </Button>
        </div>
    )
}