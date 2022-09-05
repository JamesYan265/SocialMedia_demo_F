import { useEffect, useReducer } from "react";
import { createContext } from "react";
import AuthReducer from './AuthReducer';

//init User State
const PUBLIC_FOLDER = import.meta.env.VITE_SOME_KEY;
const initiState = {
    user : JSON.parse(localStorage.getItem('user')) || null,
    // user:{
    //     _id: "62f5cd154d4a72b40a4c0787",
    //     username: "新二號",
    //     email: "Newtesttwo@gmail.com",
    //     profilePicture: "/person/6.png",
    //     coverPicture:"/post/8.jpeg",
    //     followers: [
    //         "62f4ae63c68b833bc070e049"
    //     ],
    //     followings: [
    //         "62f4ae63c68b833bc070e049"
    //     ],
    // },
    isFetching:false,
    error:false,
};

//State management
export const AuthContext = createContext(initiState);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initiState);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user]);
    return (
        <AuthContext.Provider value={{
            user:state.user,
            isFetching:state.isFetching,
            error:state.error,
            dispatch,
        }}>
            {children}
        </AuthContext.Provider>
    )
}