import React from 'react';

import './sign-in-up.styles.scss';
import SignIn from '../../components/sign-in/sign-in'
import SignUp from '../../components/sign-up/sign-up';


const SignInUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
);
export default SignInUpPage;
