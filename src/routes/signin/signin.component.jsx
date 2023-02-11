import { getDoc } from 'firebase/firestore';
import  { createUserDocumentFromAuth, signInWithGooglePopup } from '../../utils/firebase/firebase.utils.js';

const SignIn = () => {

    const logGoogleUser = async() => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);

    }

    return(<div>
            <h1> SignIn Page</h1>
            <button onClick={logGoogleUser}>Sign in with google popup</button>
        </div>);
}

export default SignIn;