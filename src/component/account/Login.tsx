import React from 'react';
import { LogInComponent } from "./Login.styles";
import { useState } from 'react';
function Login({ setEmail, setPassword, setLogIn }: { setEmail: React.Dispatch<React.SetStateAction<string>>, setPassword: React.Dispatch<React.SetStateAction<string>>, setLogIn: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [emailCurrent, setEmailCurrent] = useState("");
    const [passwordCurrent, setPasswordCurrent] = useState("");
    const setE = (e: any) => {
        setEmailCurrent(e.target.value)
    }
    const setP = (e: any) => {
        setPasswordCurrent(e.target.value)
    }
    const setBothReturnParent = (role: number) => {
        if (role === 0) {
            setEmail(emailCurrent);
            setPassword(passwordCurrent);
            setLogIn(true);
        }
        else if(role===1){
            setEmail("admin");
            setPassword(passwordCurrent);
            setLogIn(true);
        }
        else if(role===2){
            setEmail("clinician");
            setPassword(passwordCurrent);
            setLogIn(true);
        }
    }
    return (
        <LogInComponent>
            <h1>Log in to your account</h1>
            <h6>Either log in with email = "admin" or "clinician" and left the password as anything, or click the colored buttons</h6>
            <div className="form-flex">
                <div>
                    <label>email: </label>
                    <input onChange={setE} />
                </div>
                <div>
                    <label>password: </label>
                    <input onChange={setP} />
                </div>
                <button onClick={() => setBothReturnParent(0)}>Submit</button>
            </div>
            <div className="quick-access">
                <button onClick={() => setBothReturnParent(1)}>Log In as Admin</button>
                <button onClick={() => setBothReturnParent(2)}>Log In as Clinician</button>
            </div>
        </LogInComponent>
    );
}

export default Login;
