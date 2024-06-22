import { useEffect } from "react";
import { useState } from "react";
import { app } from "./firebase";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import SignupPage from "./pages/Signup";
import SigninPage from "./pages/Signin";
// import { getDatabase, ref, set } from "firebase/database";
import "./App.css";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        console.log("Hello", user);
        setUser(user);
      } else {
        // User is signed out
        console.log("You are logged out");
        setUser(null);
      }
    });
  }, []);

  if (user === null) {
    return (
      <div className="App">
        <SignupPage />
        <SigninPage />
      </div>
    );
  }
  return (
    <div className="App">
      <h1> Hello {user.email}!!</h1>
      <button onClick={() => signOut(auth)}>Log Out</button>
    </div>
  );
}

export default App;
