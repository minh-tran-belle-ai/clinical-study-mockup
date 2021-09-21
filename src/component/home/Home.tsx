import React from 'react';
import { HomeComponent } from "./Home.styles";
function Home({email, password}:{email: string, password: string}) {
    return (
        <HomeComponent>
            <h1>Welcome {email}</h1>
            <div></div>
        </HomeComponent>
    );
}

export default Home;