import React from "react";
import Content from "./components/Content";
import Navbar from './components/Navbar'
import { useState } from "react";
function App() {
  const [selected, setSelected] = useState([])

  const updateSelected = (selectedData) =>{
    setSelected(selectedData)
  }
  return (
    <div className="main--container">
      <Navbar />
      <Content updateSelected = {updateSelected} selected = {selected}/>
    </div>
  );
}

export default App;
