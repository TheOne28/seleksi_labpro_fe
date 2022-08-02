import Form from 'react-bootstrap/Form'
import CSS from 'csstype'

export type InputParam = {
    label: string,
    placeholder: string,
    type: string,
    isRequired: boolean,
    name: string,
    id: string,
    accept: string,
}

type InputConfig = {
    param: InputParam,
    handleChange: React.ChangeEventHandler<HTMLInputElement>
}

const styles: CSS.Properties= {
    paddingLeft : '10%',
    paddingRight: '10%',
    paddingBottom: '15px',
}

export function Input({
    param,
    handleChange,
}: InputConfig){
    return (
        <Form.Group className='form-input' style={styles}>
            <Form.Label>{param.label}</Form.Label>
            {param.isRequired ?
                (
                    (param.type === "file") ? 
                        <Form.Control 
                            required
                            type={param.type}
                            placeholder={param.placeholder}
                            className={param.name} 
                            id={param.id}
                            onChange = {handleChange}
                            accept={param.accept} />
                        :
                        <Form.Control 
                            required
                            type={param.type}
                            placeholder={param.placeholder}
                            className={param.name} 
                            id={param.id}
                            onChange = {handleChange} />
                )
                :
                (
                    (param.type === "file") ? 
                    <Form.Control 
                        type={param.type}
                        placeholder={param.placeholder}
                        className={param.name} 
                        id={param.id}
                        onChange = {handleChange}
                        accept={param.accept}/>
                    : 
                    <Form.Control 
                        type={param.type}
                        placeholder={param.placeholder}
                        className={param.name}
                        id={param.id}
                        onChange={handleChange}/>
                )
            }
        </Form.Group>    
    );
}