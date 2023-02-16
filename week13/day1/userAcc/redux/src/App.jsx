import { useState } from "react";

import "./App.css";
import HomePage from "./components/Home/HomePage";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState({
    name: "John",
    settings: "dark mode",
    address: "123 Main St",
  });
  const [userSites, setUserSites] = useState([
    {
      name: "mid",
      address: "1234 Main St",
      water: "yes",
      user: {
        name: "John",
    settings: "dark mode",
    address: "123 Main St",
    clearance: ["admin", "user"]
      }
    },
    {
      name: "middle",
      address: "124 Main St",
      water: "nope",
      user: {
        name: "John",
    settings: "dark mode",
    address: "123 Main St",
    clearance: ["admin", "user"]
      }
    }, 
    {
      name: "md",
      address: "234 Main St",
      water: "no",
      user: {
        name: "John",
    settings: "dark mode",
    address: "123 Main St",
    clearance: ["admin", "user"]
      }
    },
  ]);
  return (
    <div className="App">
      <HomePage userLoggedIn={userLoggedIn} userSites={userSites} />
    </div>
  );
}

export default App;
