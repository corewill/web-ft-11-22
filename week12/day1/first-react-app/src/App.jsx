import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


function App() {
  console.log("render app")
  const [counter, setCounter] = useState(0);
  const studentData = [{name:"john", occupation: "ui/uxdesigner"}]
  const studentName = "bill";
  const student2 = "Lupe"

  
  return (
    <div className="App">
      <h1>app.js</h1>
      <h3>Counter is: {counter}</h3>
      
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      {studentData.map((student) => (
        <div>
          <p>{student.name}</p>
          <p>{student.occupation}</p>
          <p>{student.name}</p>
        </div>
      ))}
      <p>{studentData.name}</p>
      <Header student2={student2}/>
      <Footer studentName={studentName} />
    </div>
  );
}

export default App;
