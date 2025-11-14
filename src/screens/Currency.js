import React from "react";

const Currency = ({ isReadOnly }) => (
  <div>
    <h2>Currency</h2>
    <p>Accessible to Analyst and Reader.</p>
    <button disabled={isReadOnly}>Save</button>
    <button disabled={isReadOnly}>Submit</button>
  </div>
);

export default Currency;