import react from 'react';
import  './login.css';

var buttonText= 'Login';

function LoginPage()
{
    return(
        <div className='loginPage'>
            <div className='loginForm'>
                <h1>Welcome</h1>
                <hr />
                <input placeholder='email id' type="email"></input>
                <input placeholder='password' type="password"></input>
                <button className='loginbtn loginbtnright'>{buttonText}</button>
            </div>
        </div>
    );
}

export default LoginPage;