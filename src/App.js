import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import './App.css';
import app from './firebase.init'
const auth = getAuth(app)

const provider = new GoogleAuthProvider();

const handelGoogleSignIn = () => {

  signInWithPopup(auth, provider)
    .then(result => {
      console.log(result.user)
    })
    .catch(error => {
      console.error('error massage: ', error)
    })
}

function App() {
  return (
    <div className="App">
      <h1>Sing in with Google</h1>
      <button onClick={handelGoogleSignIn}>google sign in</button>
    </div>
  );
}

export default App;
