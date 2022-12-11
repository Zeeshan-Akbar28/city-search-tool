import React from "react";
import "../styles/table.css";
import { useSelector } from "react-redux";
import { useState, useRef } from "react";

function Table({ updateSelected }) {
  const inputRef = useRef(null);

  const [selected, setSelected] = useState([]);

  const checkedData = (event, property) => {
    let updated = [...selected];

    if (event.target.checked) {
      updated = [...selected, property];
    } else {
      updated.splice(selected.indexOf(property), 1);
    }
    setSelected(updated);
  };
  updateSelected(selected);

  const tableData = useSelector((state) => state.initailState);
  const isShown = useSelector((state) => state.isShown);
  const queryValue = useSelector((state) => state.val);
  console.log(queryValue);

  const tableRow = tableData.map((property) => {
    return (
      <tr>
        <input
          ref={inputRef}
          type="checkbox"
          onChange={(event) => checkedData(event, property)}
        />
        <td>{property.address}</td>
        <td>{property.postcode}</td>
        <td>{property.rooms}</td>
        <td>{property.type}</td>
        <td>{property.area}</td>
      </tr>
    );
  });

  return (
    <div className="table--container">
      <h2>Search Results Results</h2>
      <table>
        <tr>
          <th></th>
          <th>Address</th>
          <th>Postcode</th>
          <th>No. of Rooms</th>
          <th>Poperty Type</th>
          <th>Area</th>
        </tr>
        {isShown && queryValue && tableRow}
      </table>
    </div>
  );
}

export default Table;
