import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQRT5NjWjcgmlJP6QyqCWMfymsEcu8_l4",
    authDomain: "giraffy-apparel-db.firebaseapp.com",
    projectId: "giraffy-apparel-db",
    storageBucket: "giraffy-apparel-db.appspot.com",
    messagingSenderId: "808911570235",
    appId: "1:808911570235:web:8750a77770d213aeb2631e",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
    signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
    signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInfo = {}
) => {
    if (!userAuth) return;
    const userDocRef = doc(db, "users", userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    //check if user exists:

    //if user data does not exist,
    //create/set document with data from userAuth in collection
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo,
            });
        } catch (error) {
            console.log("error creating user", error.message);
        }
    }
    //if user does exist,
    //return userDocRef (if first check fails, then user exists, so return info)
    return userSnapshot;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};
