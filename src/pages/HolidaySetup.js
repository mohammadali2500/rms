import React from "react";

const HolidaySetup = ({ isReadOnly }) => (
  <div>
    <h2>Holiday Setup</h2>
    <p>Accessible to Analyst and Reader.</p>
    <button disabled={isReadOnly}>Save</button>
  </div>
);

export default HolidaySetup;