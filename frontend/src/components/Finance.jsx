import { useState } from "react";
import { saveFinance } from "../api/api";

const Finance = () => {
  const [amount, setAmount] = useState(0);
  const [saved, setSaved] = useState(false);

  const handleSave = async () => {
    await saveFinance({ amount_spent: amount, saved });
    alert("Finance saved!");
  };

  return (
    <div className="card">
      <h2>Finance Tracker</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(parseFloat(e.target.value))}
        placeholder="Spent today (₱)"
      />
      <label>
        <input
          type="checkbox"
          checked={saved}
          onChange={(e) => setSaved(e.target.checked)}
        />
        Saved / No unnecessary spending
      </label>
      <button onClick={handleSave}>Save Finance</button>
    </div>
  );
};

export default Finance;
