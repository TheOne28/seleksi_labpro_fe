import Form from 'react-bootstrap/Form'
import { InputParam, Input} from './Input'
import Title from './Title';
import CSS from 'csstype';
import Footer from './Footer';

type FormParam = {
    param: InputParam[],
    title: string,
    footer: string,
}

const styles: CSS.Properties = {
    marginLeft: '15%',
    marginRight: '15%',
    border: 'solid grey',
    borderRadius: '15px'
}

export default function FormBody({
    param,
    title,
    footer
}: FormParam){
    return (
        <Form style={styles}>  
            <Title title={title}/>
            {
                param.map(each =>
                    <Input
                        label={each.label}
                        placeholder={each.placeholder}
                        type={each.type}
                        isRequired={each.isRequired}
                        name={each.name}
                    />
                )
            }
            <Footer footer={footer}/>
        </Form>
    )
}