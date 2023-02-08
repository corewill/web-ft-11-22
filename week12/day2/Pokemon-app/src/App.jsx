import "./App.css";
import Account from "./components/Account/Account.jsx";
import AccountSettings from "./components/Account/AccountSettings.jsx";
import AccountUser from "./components/Account/AccountUser.jsx";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar.jsx";
import Errorpage from "./components/Errorpage/Errorpage.jsx";
import { useState } from "react";
import PokeCardContainer from "./components/PokeCardContainer/PokeCardContainer.jsx";
import PokemonCard from "./components/PokemonCard/PokemonCard.jsx";

function App() {
  const [user, setUser] = useState("");
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<PokeCardContainer />} />
          <Route path="/PokeCard" element={<PokemonCard />} />
          <Route path="/homepage" element={<Homepage user={user} />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/account">
            <Route index element={<Account />} />
            <Route path="settings" element={<AccountSettings />} />
            <Route path=":id" element={<AccountUser />} />
          </Route>
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
