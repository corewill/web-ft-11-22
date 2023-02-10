import { useState } from "react";
import signup from "./components/signup";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <signup /> 
    </div>
  );
}

export default App;
