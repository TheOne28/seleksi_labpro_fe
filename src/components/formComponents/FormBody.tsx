import Form from 'react-bootstrap/Form'
import {Input} from './Input'
import Title from './Title';
import CSS from 'csstype';
import {Footer} from './Footer';
import {FormButton} from './FormButton';
import { FormParam } from './Param';

const styles: CSS.Properties = {
    marginLeft: '15%',
    marginRight: '15%',
    marginBottom: "5%",
    border: 'solid grey',
    borderRadius: '15px',
    marginTop: "15%",
    
}


export default function FormBody({
    param,
    title,
    useFooter,
    footer,
    buttonParam,
    disable,
    handleSubmit,
    inputChange,
    selectChange
}: FormParam){

    return (
        <Form style={styles} onSubmit={handleSubmit}>  
            <Title heading={title}/>
            {
                param.map(each =>
                    <Input
                        disable={disable}
                        param={each}
                        inputChange={inputChange}
                        selectChange={selectChange}
                    />
                )
            }
            {useFooter? (<Footer footer={footer.footer}
                            linkUrl={footer.linkUrl}
                            linkText={footer.linkText}/>)
                    :
                    <></>
            }

            <FormButton variant={buttonParam.variant}
                        text={buttonParam.text}
                        type={buttonParam.type}/>
        </Form>
    )
}