import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
} from "../../../utilities/firebase.utils";

import SignUpForm from "../../sign-up-form/sign-up-form.component";

const SignInForm = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <h1>Sign-in Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            <SignUpForm />
        </div>
    );
};

export default SignInForm;
