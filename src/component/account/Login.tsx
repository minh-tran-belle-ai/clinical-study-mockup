import React from 'react';
import { LogInComponent } from "./Login.styles";
import { useState } from 'react';
function Login({setEmail, setPassword, setLogIn}:{setEmail: React.Dispatch<React.SetStateAction<string>>, setPassword: React.Dispatch<React.SetStateAction<string>>, setLogIn: React.Dispatch<React.SetStateAction<boolean>>}) {
    const [emailCurrent, setEmailCurrent]=useState("");
    const [passwordCurrent, setPasswordCurrent]=useState("");
    const setE=(e: any)=>{
        setEmailCurrent(e.target.value)  
    }
    const setP=(e: any)=>{
        setPasswordCurrent(e.target.value)  
    }
    const setBothReturnParent=()=>{
        setEmail(emailCurrent);
        setPassword(passwordCurrent);
        setLogIn(true);
    }
    return (
        <LogInComponent>
            <h1>Log in to your account</h1>
            <div className="form-flex">
                <div>
                    <label>email: </label>
                    <input onChange={setE}/>
                </div>
                <div>
                    <label>password: </label>
                    <input onChange={setP}/>
                </div>
            <button onClick={()=>setBothReturnParent()}>Submit</button>
            </div>
        </LogInComponent>
    );
}

export default Login;
