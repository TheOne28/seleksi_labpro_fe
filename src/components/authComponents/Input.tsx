import Form from 'react-bootstrap/Form'
import CSS from 'csstype'

export type InputParam = {
    label: string,
    placeholder: string,
    type: string,
    isRequired: boolean,
    name: string,
}

const styles: CSS.Properties= {
    paddingLeft : '10%',
    paddingRight: '10%',
    paddingBottom: '15px',
}

export function Input({
    label,
    placeholder,
    type,
    isRequired,
    name,
}: InputParam){
    return (
        <Form.Group className='form-input' style={styles}>
            <Form.Label>{label}</Form.Label>
            {isRequired ?
                <Form.Control 
                required
                type={type}
                placeholder={placeholder}
                className={name} 
                />
                : 
                <Form.Control 
                type={type}
                placeholder={placeholder}
                className={name}
                />
            }
        </Form.Group>    
    );
}