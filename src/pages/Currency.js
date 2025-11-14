// src/screens/currency/CurrencySetup.js
import { useNavigate } from "react-router-dom";
import { RouteMap } from "../config/RouteMap";

const Currency = ({ isReadOnly }) => {
  const navigate = useNavigate();

  const handleNew = () => {
    navigate(RouteMap.currencyNew.path);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Currency Setup</h2>

      <button
        onClick={handleNew}
        disabled={isReadOnly}
        style={{
          marginBottom: 20,
          padding: "8px 16px",
          background: isReadOnly ? "#ccc" : "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: 4,
          cursor: isReadOnly ? "not-allowed" : "pointer"
        }}
      >
        New Currency
      </button>

      {/* Example table */}
      <table
        border="1"
        cellPadding="8"
        style={{ borderCollapse: "collapse", width: "100%" }}
      >
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>USD</td>
            <td>US Dollar</td>
          </tr>
          <tr>
            <td>GBP</td>
            <td>Pound Sterling</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Currency;