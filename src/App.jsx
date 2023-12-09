import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyDDT9AoYxVp5ZquI2I_h4cCX4nK4Ix6O1U",
    authDomain: "inventoryiq-ba27e.firebaseapp.com",
    databaseURL: "https://inventoryiq-ba27e-default-rtdb.firebaseio.com",
    projectId: "inventoryiq-ba27e",
    storageBucket: "inventoryiq-ba27e.appspot.com",
    messagingSenderId: "429434038189",
    appId: "1:429434038189:web:1536063292eef4d58d2324",
    measurementId: "G-S8P7ZPSKWT",
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  async function getItems(db) {
    const itemsColumn = collection(db, "items");
    const itemSnapshot = await getDocs(itemsColumn);
    const itemList = itemSnapshot.docs.map((doc) => doc.data());
    return itemList;
  }

  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <Table />
        <Card />
      </div>
    </>
  );
}

export default App;
