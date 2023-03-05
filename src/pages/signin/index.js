import { signinWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/index.js"

const SignIn = () => {
    const googleSigninHandler = async () => { 
        const { user } = await signinWithGooglePopup();
        createUserDocumentFromAuth(user)
    }
    return (
        <div>
            <h1>
                I'm in the SignIn...
            </h1>
            <button onClick={googleSigninHandler}>
                SignIn with Google
            </button>
        </div>
    )
}

export default SignIn