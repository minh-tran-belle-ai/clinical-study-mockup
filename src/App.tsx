import React from 'react';
import { useState } from 'react';
import './App.css';

import Login from "./component/account/Login"
import Home from "./component/home/Home"
import Organization from './component/organization/CRUDOrganization';
import Study from './component/study/CRUDStudy';
import StudySingle from './component/study/StudySingle';
import User from "./component/user/CRUDUser";


function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logIn, setLogIn] = useState(false)
  return (
    <div className="App">
      {logIn === false ? <Login setEmail={setEmail} setPassword={setPassword} setLogIn={setLogIn} /> :
        <button onClick={() => { setLogIn(false) }}>LogOut</button>}
      {(logIn === true && email==="admin") ?
        <div>
          <Home email={email} password={password} />
          <Organization/>
          <User/>
          <Study/>
        </div> : <span />
      }
      {(logIn === true && email==="clinician") ?
        <div>
          <StudySingle />
        </div> : <span />
      }
    </div>
  );
}

export default App;
