import React from 'react';
import { HomeComponent } from "./Home.styles";
import {useState} from 'react';
function Home({email, password}:{email: string, password: string}) {
    // const [email, setEmail]=useState("");
    // const [password, setPassword]=useState("");
   let admin="admin"
   let clinician="clinician"
    return (
        <HomeComponent>
            <h1>Welcome {email}</h1>
            <div></div>
        </HomeComponent>
    );
}

export default Home;