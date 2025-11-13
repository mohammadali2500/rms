import React from "react";

const Holiday = ({ isReadOnly }) => (
  <div>
    <h2>Holiday</h2>
    <p>Accessible to Analyst and Reader.</p>
    <button disabled={isReadOnly}>Save</button>
  </div>
);

export default Holiday;