import {createContext, ReactNode, useState} from 'react';
import {UserIf} from "../models/UserIf";


interface AuthData {
    isLogged: boolean,
    user : UserIf | null,
    token : string | null,
    setToken : (token : string | null) => void,
    setUser : (user : UserIf | null) => void,
    setIsLogged : (isLogged : boolean) => void,
}

const AuthContext = createContext<AuthData>({
    isLogged : false,
    user : null,
    token : null,
    setToken: () => {},
    setUser: () => {},
    setIsLogged: () => {},
});

export function AuthContextProvider({
    children,
} : {
    children: ReactNode
}){
    const [isLogged, setIsLogged] = useState<boolean>(false);
    const [user, setUser] = useState<UserIf | null>(null);
    const [token, setToken] = useState<string | null>(null);

    return (
       <AuthContext.Provider value={{isLogged, user, token, setToken, setUser, setIsLogged}}>
            {children}
       </AuthContext.Provider>
    )

} 

export default AuthContext;