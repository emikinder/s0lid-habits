import {
    GoogleAuthProvider,
    getAuth,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { auth, db } from "./firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signInWithGoogle = async () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();

        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            const userDoc = doc(db, "users", user.uid);
            const docSnap = await getDoc(userDoc);

            if (!docSnap.exists()) {
                const currentDate = new Date();
                currentDate.setMonth(currentDate.getMonth() + 1);
                await setDoc(userDoc, {
                    uid: user.uid,
                    email: user.email,
                    name: user.displayName,
                    createdAt: new Date(),
                });
            }
        } catch (error) {
            alert(error.message);
        }
    };

    const logOut = async () => {
        setLoading(true);
        try {
            await signOut(auth);
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    // const getUserData = async (uid) => {
    //     try {
    //         const userDoc = doc(db, "users", uid);
    //         const docSnap = await getDoc(userDoc);

    //         if (docSnap.exists()) {
    //             return docSnap.data();
    //         } else {
    //             console.log("No such document!");
    //         }
    //     } catch (error) {
    //         console.log("Error getting document:", error);
    //     }
    // };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            // if (currentUser) {
            //     const user = await getUserData(currentUser.uid);
            setUser(currentUser);
            // }
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const authValue = {
        signInWithGoogle,
        user,
        logOut,
        loading,
    };

    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;
