import { getAuth } from "firebase/auth";
import './App.css';
import app from './firebase.init'
const auth = getAuth(app)


function App() {
  return (
    <div className="App">
      <h1>Sing in with Google</h1>
      <button>google sign in</button>
    </div>
  );
}

export default App;
