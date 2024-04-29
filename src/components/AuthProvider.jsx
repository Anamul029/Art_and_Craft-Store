import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext = createContext(null)
// google provider
const googleProvider = new GoogleAuthProvider()
// git provider
const githubProvider=new GithubAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //   userLogin
    const userLogin = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    //   google login
    const googleLogin = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }

    // gitHub login
    const githubLogin=()=>{
        setLoader(true);
        return signInWithPopup(auth,githubProvider)
    }

    //   logout system
    const logOut = () => {
        setLoader(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user', currentUser)
            setUser(currentUser);
            setLoader(false)

        })
        return () => {
            unSubscribe();
        }
    }, [])


    const AuthInfo = { user, loader, createUser, userLogin, googleLogin,githubLogin, logOut }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;