import Form from 'react-bootstrap/Form'
import CSS from 'csstype'
import { InputConfig} from './Param';


const styles: CSS.Properties= {
    paddingLeft : '10%',
    paddingRight: '10%',
    paddingBottom: '15px',
}

function GenerateInput({
    param,
    disable,
    inputChange,
    selectChange,
}: InputConfig){
    if(param.type === "text" || param.type === "password"){
        return <Form.Control required={param.isRequired}
                             type={param.type}
                             placeholder={param.placeholder}
                             className={param.name}
                             id = {param.id}
                             onChange={inputChange} 
                             disabled={disable}/>
    }

    if(param.type === "file"){
        return <Form.Control required={param.isRequired}
                             type="file"
                             placeholder={param.placeholder}
                             className={param.name} 
                             id={param.id}
                             onChange = {inputChange}
                             accept={param.accept} 
                             disabled={disable}/>
    }

    if(param.type === "select"){
        return <Form.Select className={param.name}
                            id={param.id}
                            required={param.isRequired}
                            onChange={selectChange}
                            disabled={disable}>
                    {
                        param.option.map(each =>
                            <option value={each}>{each}</option>
                        )    
                    }
                
                </Form.Select>
                            
    }
    return <></>
}


export function Input({
    param,
    disable,
    inputChange,
    selectChange
}: InputConfig){
    return (
        <Form.Group className='form-input' style={styles}>
            <Form.Label>{param.label}</Form.Label>
            <GenerateInput param={param}
                           disable={disable}
                           inputChange={inputChange}
                           selectChange={selectChange} />
        </Form.Group>    
    );
}