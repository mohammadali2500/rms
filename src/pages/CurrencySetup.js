import React from "react";

const CurrencySetup = ({ isReadOnly }) => (
  <div>
    <h2>Currency Setup</h2>
    <p>Accessible to Analyst and Reader.</p>
    <button disabled={isReadOnly}>Save</button>
    <button disabled={isReadOnly}>Submit</button>
  </div>
);

export default CurrencySetup;