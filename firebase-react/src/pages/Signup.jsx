import react, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import { app } from "../firebase";

const provider = new GoogleAuthProvider();
const provide = new GithubAuthProvider();
const auth = getAuth(app);

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUSer = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) =>
      alert("Success")
    );
  };

  const signupWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        alert("Signed In Successfully!!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signupWithGithub = () => {
    signInWithPopup(auth, provide)
      .then((result) => {
        alert("Signed In Successfully!!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="signup-page">
      <h1>SignUp Here</h1>
      <label>Email</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        required
        placeholder="Enter your email here"
      />
      <br></br>
      <label>Password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        required
        placeholder="Enter your Password here"
      />
      <br></br>
      <button onClick={signupWithGoogle}>Signin using Google</button>
      <button onClick={signupWithGithub}>Signin using Github</button>
      <button onClick={createUSer}>Signup</button>
    </div>
  );
};

export default SignupPage;
