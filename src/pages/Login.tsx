import Header from "../components/authComponents/Header"
import FormBody from "../components/authComponents/FormBody"
import { loginFields } from "../constants/Login"

export function Login(){
    return (
        <>
            <Header heading={loginFields.heading}/>
            <FormBody 
                param={loginFields.data} 
                title={loginFields.title}
                footer={loginFields.footer}
                />
        </>
    )
}