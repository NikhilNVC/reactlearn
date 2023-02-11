import { getDoc } from 'firebase/firestore';

import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import  { auth, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils.js';
import SignupForm from '../../components/signup/signup-component.jsx';
import SigninForm from '../../components/signin/signin-component.jsx';

import './authentication.styles.scss';

const Authentication = () => {
    console.log(1);

    useEffect(
         () => {
            createRedirectUser();
    },[]);

    const createRedirectUser = async () => {
        const response =  await getRedirectResult(auth);
        console.log(response);
        if(response){
            const userDocRef =  await createUserDocumentFromAuth(response.user);
        }
    }

    return(<div className='authentication-container'>
            {/*<button onClick={logGoogleUser}>Sign in with google popup</button>
            <button onClick={signInWithGoogleRedirect}>sign in with google redirect</button>*/}
            <SignupForm/>
            <SigninForm/>
        </div>);
}

export default Authentication;