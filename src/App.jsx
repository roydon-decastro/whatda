import { useState } from "react";
import { useContext } from "react";
import Landing from "./pages/Landing";
import { AuthContext } from "../src/context/authContext";
// import "./App.css";

function App() {
  const { currentUser } = useContext(AuthContext);
  console.log("App component current user: " + currentUser);
  return (
    <>
      <Landing />
    </>
  );
}

export default App;
