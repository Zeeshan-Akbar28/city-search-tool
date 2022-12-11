import React, { useState } from "react";
import "../styles/inputfor.css";
import { useDispatch } from "react-redux";
import TableSelected from "./TableSelected";

function InputForm({ selected }) {
  const dispatch = useDispatch();

  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const HandleSubmit = () => {
    if (!query) alert("Search field Cannot be Emmpty or No Result Found");
    dispatch({ type: "submit", value: query });
  };

  // console.log(address);

  return (
    <div className="input--container">
      <h4>Search</h4>
      <div className="input--search">
        <input
          type="text"
          value={query}
          placeholder="City"
          onChange={handleChange}
        />
        <button onClick={HandleSubmit}>Search</button>
      </div>
      <TableSelected selected={selected} />
    </div>
  );
}
export default InputForm;
