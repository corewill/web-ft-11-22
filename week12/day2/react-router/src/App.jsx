import Account from "./components/Account/Account";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import Errorpage from "./components/Errorpage/Errorpage";
import { Route, Routes } from "react-router-dom";
import Accountsettings from "./components/Account/Accountsettings";
import AccountUser from "./components/Account/AccountUser";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("corey")
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/homepage" element={<Homepage user={user}/>} />
        <Route path="/account">
          <Route index element={<Account />} />
          <Route path="settings" element={<Accountsettings />} />
          <Route path=":id" element={<AccountUser />} />
        </Route>
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </>
  );
}

export default App;
