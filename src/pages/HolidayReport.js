import React from "react";

const HolidayReport = ({ isReadOnly }) => (
  <div>
    <h2>Holiday Report</h2>
    <p>Accessible to Approver and Reader.</p>
    <button disabled={isReadOnly}>Generate</button>
  </div>
);

export default HolidayReport;