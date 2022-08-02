import Form from 'react-bootstrap/Form'
import { InputParam, Input} from './Input'
import Title from './Title';
import CSS from 'csstype';
import {Footer, FooterParam} from './Footer';
import {FormButton, ButtonParam} from './FormButton';

type FormParam = {
    param: InputParam[],
    title: string,
    footer: FooterParam,
    buttonParam: ButtonParam,
    handleSubmit : React.FormEventHandler<HTMLFormElement>,
    handleChange : React.ChangeEventHandler<HTMLInputElement>,
}

const styles: CSS.Properties = {
    marginLeft: '15%',
    marginRight: '15%',
    marginBottom: "5%",
    border: 'solid grey',
    borderRadius: '15px',
    
}


export default function FormBody({
    param,
    title,
    footer,
    buttonParam,
    handleSubmit,
    handleChange,
}: FormParam){

    return (
        <Form style={styles} onSubmit={handleSubmit}>  
            <Title title={title}/>
            {
                param.map(each =>
                    <Input
                        param={each}
                        handleChange={handleChange}
                    />
                )
            }
            <Footer footer={footer.footer}
                    linkUrl={footer.linkUrl}
                    linkText={footer.linkText}/>
            <FormButton variant={buttonParam.variant}
                        text={buttonParam.text}
                        type={buttonParam.type}/>
        </Form>
    )
}