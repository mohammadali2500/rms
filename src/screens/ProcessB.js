import React from "react";

const ProcessB = ({ isReadOnly }) => (
  <div>
    <h2>Process A</h2>
    <p>Accessible to Analyst and Reader.</p>
    <button disabled={isReadOnly}>Execute</button>
  </div>
);

export default ProcessB;