import React from "react";

function TableSelected({ selected }) {
  const render = selected.length !== 0 && (
    <table>
      <tr>
        <th>Address</th>
        <th>Postcode</th>
        <th>No. of Rooms</th>
        <th>Poperty Type</th>
        <th>Area</th>
      </tr>
      {selected.map((property) => {
        return (
          <tr>
            <td>{property.address}</td>
            <td>{property.postcode}</td>
            <td>{property.rooms}</td>
            <td>{property.type}</td>
            <td>{property.area}</td>
          </tr>
        );
      })}
    </table>
  );
  return (
    <div className="selcted--table">
      <h2>Selected Results</h2>
      {render}
    </div>
  );
}

export default TableSelected;
