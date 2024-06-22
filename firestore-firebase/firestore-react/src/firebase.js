import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCSx5Iz7mMZzmf9XGOZOaL7VjXLn734Ois",
  authDomain: "app-ef49d.firebaseapp.com",
  projectId: "app-ef49d",
  storageBucket: "app-ef49d.appspot.com",
  messagingSenderId: "617710906704",
  appId: "1:617710906704:web:28a84fb4982813c28e1055",
  databaseURL: "https://app-ef49d-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
