import React from "react";

const DailyReportA = ({ isReadOnly }) => (
  <div>
    <h2>Daily Report A</h2>
    <p>Accessible to Approver and Reader.</p>
    <button disabled={isReadOnly}>Generate Report</button>
  </div>
);

export default DailyReportA;