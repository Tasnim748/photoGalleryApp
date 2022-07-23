import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from '../firebase';

const UserContext = createContext();

export const AuthContextProvider = props => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password).then(userCred => {
            console.log(userCred.user.email);
            navigate('/account')
        }).catch(e => {
            console.log(e.message);
        });
    }

    const logout = () => {
        return signOut(auth);
    }

    const signin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password).then(userCred => {
            navigate('/account');
            console.log(userCred.user.email);
        }).catch(err => {
            console.log(err.message);
            window.alert('Please sign in with valid email and password');
        });
    };
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return unsubscribe;
    },[]);

    return (
        <UserContext.Provider 
            value={{
                createUser: createUser,
                user: user,
                logout: logout,
                signin: signin,
            }}
        >
            {!loading && props.children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext);
};