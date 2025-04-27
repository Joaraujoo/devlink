
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDrlzY-FQnLu7kSeS57AhSLHkZQdweHIBY",
  authDomain: "reactlinks-89f27.firebaseapp.com",
  projectId: "reactlinks-89f27",
  storageBucket: "reactlinks-89f27.firebasestorage.app",
  messagingSenderId: "819710150934",
  appId: "1:819710150934:web:704b6616c24b56ab186837"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app) //Autenticação (login, logout)
const db = getFirestore(app) //Banco de dados (armazenar dados)

export { auth, db }