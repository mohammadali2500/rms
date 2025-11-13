import React from "react";

const CurrencyReport = ({ isReadOnly }) => (
  <div>
    <h2>Currency Report</h2>
    <p>Accessible to Approver and Reader.</p>
    <button disabled={isReadOnly}>Export</button>
  </div>
);

export default CurrencyReport;