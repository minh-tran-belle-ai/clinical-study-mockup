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
        <div>
          <button onClick={() => { setLogIn(false) }}>LogOut</button>
          <Home email={email} password={password} />
        </div>}

      {(logIn === true && email === "admin") ?
        <div>
          <User />
          <Organization />
        </div> : <span />
      }
      {(logIn === true && email === "moderator") ?
        <div>
          <Study />
         
          
        </div> : <span />
      }
      {(logIn === true && email === "clinician") ?
        <div>
          <StudySingle />
        </div> : <span />
      }
    </div>
  );
}

export default App;
