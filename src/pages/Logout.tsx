import useAuth from "../hooks/useAuth";
import { useCookies } from "react-cookie";
import { useContext } from "react";

export function LogOut(){
    const {logout} = useAuth();
    const [token, setToken, removeToken] = useCookies(['token']);

    logout();
    removeToken("token");


    return (
        <></>
    )
}