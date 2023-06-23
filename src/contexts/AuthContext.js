import { createContext } from "react";

const AuthContext = createContext({});

function AuthProvider({ children }) {
    return (
        <AuthContext.Provider value ={{logado : true}}>
            { children }

        </AuthContext.Provider>

    );

}



export default AuthContext;





