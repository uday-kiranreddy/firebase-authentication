import React from "react";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase-config";
function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth,currentUser=>{
    setUser(currentUser)
  })
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      alert(error.message);
    }
  };
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      alert(error.message);
    }
  };
  const signout =async () => {
    await signOut(auth);
    alert("signouted sucess");
  };
  return (
    <>
      {/* register */}
      <div>
        <h2>Register User</h2>
        <input
          type="email"
          value={registerEmail}
          onChange={(e) => setRegisterEmail(e.target.value)}
          placeholder="registeremail"
        />
        <input
          type="password"
          value={registerEmail}
          onChange={(e) => setRegisterPassword(e.target.value)}
          placeholder="registerpassword"
        />
        <button onClick={register}>Create User</button>
      </div>

      {/* login */}
      <div>
        <h2>Login </h2>
        <input
          type="email"
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
          placeholder="loginemail"
        />
        <input
          type="password"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
          placeholder="loginpassword"
        />
        <button onClick={login}>Login</button>
      </div>

      {/* signout */}
      <div>
        <h2>{user?.email}</h2>
        <button onClick={signout}>Signout</button>
      </div>
    </>
  );
}

export default App;
