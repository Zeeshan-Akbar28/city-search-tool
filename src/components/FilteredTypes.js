import React from "react";
import "../styles/filteredtypes.css";
import { useDispatch } from "react-redux";

function FilteredTypes() {
  const dispatch = useDispatch();
  const actionDispatch = (event) => {
    dispatch({
      type: event.target.innerText,
      payLoad: event.target.innerText === "All" ? true : false,
    });
  };
  return (
    <div className="type--container">
      <h2>Property Types</h2>
      <div className="type--values">
        <ul>
          <a href="javascript:void(0)">
            <li onClick={actionDispatch}>All</li>
          </a>
          <a href="javascript:void(0)">
            <li onClick={actionDispatch}>Flat</li>
          </a>
          <a href="javascript:void(0)">
            <li onClick={actionDispatch}>Terraced House</li>
          </a>
          <a href="javascript:void(0)">
            <li onClick={actionDispatch}>Semi-detached</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default FilteredTypes;
