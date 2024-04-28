import { createContext, useState } from "react";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";


export const AuthContext = createContext(null)
// google provider
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader,setLoader]=useState(true)

  const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
  }
//   userLogin
  const userLogin=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
  }
//   google login
  const googleLogin=()=>{
    return signInWithPopup(auth,googleProvider)
  }

    
    const AuthInfo = { user,loader,createUser,userLogin,googleLogin }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;