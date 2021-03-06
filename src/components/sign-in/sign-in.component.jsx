import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';
import { signInWithEmailAndPassword } from 'firebase/auth';

class SignIn extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        

        const { email, password } = this.state;

        try{
            await signInWithEmailAndPassword(auth, email, password);
            this.setState({ email: '', password: '' });
        }catch(error){
            console.error(error);
        }
    };

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({[name]: value});
    }

    render(){
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                
                <form onSubmit={ this.handleSubmit }>
                    <FormInput
                    type="email"
                    name="email"
                    handleChange = { this.handleChange }
                    value = {this.state.email}
                    label="email"
                    required/>

                    <FormInput
                    type="password"
                    name="password"
                    handleChange = { this.handleChange }
                    value = { this.state.password } 
                    label="password"
                    required/>
                    <div className="buttons">
                        <CustomButton type="submit" onClick={ this.handleSubmit }>SIGN IN</CustomButton>
                        <CustomButton onClick={ signInWithGoogle } isGoogleSignIn> Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;