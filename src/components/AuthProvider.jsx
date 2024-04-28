import { createContext, useState } from "react";
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader,setLoader]=useState(true)

  const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
  }
//   userLogin
  const userLogin=(email,password)=>{
    return signInWithEmailAndPassword(email,password)
  }


    
    const AuthInfo = { user,loader,createUser,userLogin }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;