import "./authentication.styles.scss";
import SignInForm from "../../sign-in-form/sign-in-form.component";
import SignUpForm from "../../sign-up-form/sign-up-form.component";

const Authentication = () => {
    return (
        <div className="sign-in-container">
            <div className="sign-in-form-wrapper">
                <SignInForm />
                <hr />
                <SignUpForm />
            </div>
        </div>
    );
};

export default Authentication;
