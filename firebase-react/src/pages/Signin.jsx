import react, { useState } from "react";
import { app } from "../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SigninUSer = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        console.log("Signin Success");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="signin-page">
      <h1>Signin Page</h1>
      <label>Enter your mail</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="Enter your email"
      ></input>
      <label>Enter your password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Enter your password"
      ></input>
      <button onClick={SigninUSer}>Sign me In</button>
    </div>
  );
};

export default SigninPage;
