import React from "react";
import InputField from "./components/InputField.jsx";
import ContactForm from "./components/ContactForm.jsx";
import "./App.css";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/" element={<InputField />} />
      <Route path="/contact" element={<ContactForm />} />
      {/* <Route path="*" element={<ErrorPage />} /> */}
    </Routes>
  );
}

export default App;
