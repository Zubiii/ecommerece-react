import { signinWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/index.js"
import SignUp from "./signup/index.js";

const SignIn = () => {

    const googleSigninHandler = async () => { 
        const { user } = await signinWithGooglePopup();
        await createUserDocumentFromAuth(user)
    }

    return (
        <div>
            <h1>
                I'm in the SignIn...
            </h1>
            <button onClick={googleSigninHandler}>
                SignIn with Google
            </button>
            <SignUp />
        </div>
    )
}

export default SignIn