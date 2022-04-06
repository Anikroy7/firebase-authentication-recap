import { getByDisplayValue } from "@testing-library/react";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import './App.css';
import app from './firebase.init'
const auth = getAuth(app)




function App() {

  const provider = new GoogleAuthProvider();

  const [user, setUser] = useState({});

  const handelGoogleSignIn = () => {

    signInWithPopup(auth, provider)
      .then(result => {
        console.log(result.user);
        setUser(result.user)
      })
      .catch(error => {
        console.error('error massage: ', error)
      })



  }

  const signOutHandeler = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .catch(() => {
        setUser({})
      })

  }
  return (
    <div className="App">
      <h1>Sing in with Google</h1>
      {
        user.email ? <button onClick={signOutHandeler}>Sign out</button> :
          <button onClick={handelGoogleSignIn}> Google sign in</button>
      }

      <h3>Name: {user.displayName}</h3>
      <h3>Email: {user.email}</h3>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
