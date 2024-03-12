import { createContext, useCallback, useState, useEffect} from "react";
import axios from 'axios';
export const Auth_Context = createContext();


export const Auth_ContextProvider = ({children}) => {
    const [user, setUser] = useState('');
    
    const [registerInfo, setRegisterInfo] = useState({
        metamaskId: "",
        email: "",
        password: "",
        type: ""
    });

    useEffect(() => {
        const User = localStorage.getItem("User")
        setUser(User.data);
        console.log(user)
    }, []);

    const registerUser = useCallback(async (e) => {
        e.preventDefault();
        const response = await axios.post("https://authentication-service-space-share.onrender.com/login",JSON.stringify(registerInfo), {
            headers: {
                "Content-Type": "application/json"
            },
        });
        if (response.error) {
            return console.log(response);
        }
        localStorage.setItem("User", JSON.stringify(response));
        console.log(response.data);
        setUser(response.data);

    }, [registerInfo]);

    const updateRegisterInfo = useCallback((info) => {
        setRegisterInfo(info);
    }, [])

    return (
        <Auth_Context.Provider
        value = {{
            registerInfo,
            registerUser,
            updateRegisterInfo,
            user
        }}>
            {children}
        </Auth_Context.Provider>
    )
}