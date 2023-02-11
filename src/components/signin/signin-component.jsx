
import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup, signInWithUserEmailAndPassword } from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import './signin-form-styles.scss'


const defaultFormFields = {
    email:'',
    password:''
}


const SigninForm = () => {

    const [formFields, setFormFields]  = useState(defaultFormFields);
    const { email, password} = formFields;

    const resetFormFields = () => setFormFields(defaultFormFields);
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]:value});
    };

    const handleSubmit = async (event)=>{
        event.preventDefault(); 

        try{
            const response = await signInWithUserEmailAndPassword(email, password);
            resetFormFields();
            //console.log(response);
        }catch(error){
            switch(error.code){
                case 'auth/wrong-password':
                    alert('Incorrect password/Email');
                    break;
                case 'auth/user-not-found':
                    alert('No User found for the email');
                    break;
                default:
                    console.log(error);
            }

        }
    }

    const SignInWithGoogle = async() => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);

    }

    return(
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with email and password</span>
            <form onSubmit={handleSubmit}>
                
                    
                <FormInput label ="Email" type='email' onChange={handleChange} name='email' value ={email} required/>
                
                <FormInput label ="Password" type='password' onChange={handleChange} name='password' value={password}  required/>
                
                <div  className='buttons-container'>
                    <Button type='submit' text='Sign In'>Sign In</Button>
                    <Button type = 'button' buttonType= 'google' onClick={SignInWithGoogle}>Google Sign In</Button>
                </div>
               
            </form>
        </div>
    );
}

export default SigninForm;