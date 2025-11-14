import React from "react";

const CurrencyNew = ({ isReadOnly }) => (
  <div>
    <h2>Currency</h2>
    <p>Accessible to Analyst and Reader.</p>
    <button disabled={isReadOnly}>Save</button>
  </div>
);

export default CurrencyNew;