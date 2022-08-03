import { useContext } from "react";
import AuthContext from "../context/authContext";
import { login } from "../lib/login";
import axios from 'axios';

export default function useAuth(){
    const {isLogged, user, token, setToken, setUser, setIsLogged} = useContext(AuthContext);

    async function loginUser(loginState : any){
        try{
            const data = await login(loginState);
            console.log(data);
            // if(data.status === "Success"){
            // }
            
            setUser(data);
            setToken(data.token);
            setIsLogged(true);
            return {
                status: "Success",
                data: data
            };
            // return {
            //     status: "Error",
            //     data: data.data,
            // }
        } catch(err){
            console.log("Here");
            if(axios.isAxiosError(err)){
                console.log(err.response?.data)
                return{
                    status: "Error",
                    //@ts-ignore
                    data : err.response?.data.data,
                }
            }

            return {
                status: "Error",
                data : "Axios error",
            }
        }
    }

    async function logout(){
        setUser(null);
        setToken(null);
        setIsLogged(false);
    }

    return {
        loginUser,
        logout,
        token,
        user,
        isLogged,
    }   
}