import React from "react";

const DailyReportB = ({ isReadOnly }) => (
  <div>
    <h2>Daily Report B</h2>
    <p>Accessible to Approver and Reader.</p>
    <button disabled={isReadOnly}>Generate Report</button>
  </div>
);

export default DailyReportB;