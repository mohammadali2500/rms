import React from "react";

const currencyNew = ({ isReadOnly }) => (
  <div>
    <h2>Currency New</h2>
    <p>Accessible to Analyst and Reader.</p>
    <button disabled={isReadOnly}>Save</button>
    <button disabled={isReadOnly}>Submit</button>
  </div>
);

export default currencyNew;