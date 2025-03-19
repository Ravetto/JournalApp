import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";


const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async() => {
    try{
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        const { displayName, email, photoURL, uid } = result.user

        return {
            ok: true,
            displayName, email, photoURL, uid
        }
    } catch(error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorMessage
        }
    }
}

export const registerUserWithEmailPassword = async({ email, password, displayName }) => {
    try{
        console.log({email, password, displayName})
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = resp.user;
        await updateProfile(FirebaseAuth.currentUser, { displayName });
        return {
            ok: true,
            uid, photoURL, email, password, displayName
        }
    } catch(error){
        return {
            ok: false,
            errorMessage: 'ese usuario ya existe'
        }
    }
}

export const loginUserWithEmailPassword = async({ email, password }) => {
    try {
        console.log({email, password});
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL, displayName } = resp.user
        return {
            ok: true,
            uid, photoURL, displayName
        } 
    } catch(error){
        return {
            ok: false,
            errorMessage: 'No se encontro un usuario con ese email y/o contraseña'
        }
    }
}

export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut()
}