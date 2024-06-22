import { useState } from "react";
import { app } from "./firebase";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  updateDoc,
} from "firebase/firestore";
import "./App.css";

const firestore = getFirestore(app);

function App() {
  const writeData = async () => {
    const result = await addDoc(collection(firestore, "cities"), {
      name: "Delhi",
      pincode: 123456,
      lat: 123,
      long: 456,
    });

    console.log("result", result);
  };

  const makeSubCollection = async () => {
    await addDoc(collection(firestore, "cities/gOIHIGZZavJvMWgccaZ3/places"), {
      name: "This is a place",
      desc: "Aswm Desc",
      date: Date.now(),
    });
  };

  const getDocument = async () => {
    const ref = doc(firestore, "cities", "gOIHIGZZavJvMWgccaZ3");
    const snap = await getDoc(ref);
    console.log(snap.data());
  };

  const getQueries = async () => {
    const q = query(collection(firestore, "cities"), where("lat", "==", 123));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  };

  const update = async () => {
    const cityRef = doc(firestore, "cities", "gOIHIGZZavJvMWgccaZ3");
    await updateDoc(cityRef, {
      name: "New Delhi",
    });
  };

  return (
    <div className="App">
      <h1>Firebase Firestore</h1>
      <button onClick={writeData}>Put Data</button>
      <button onClick={makeSubCollection}>Put Sub Data</button>
      <button onClick={getDocument}>Get Document</button>
      <button onClick={getQueries}>Get Query</button>
      <button onClick={update}>Update</button>
    </div>
  );
}

export default App;
