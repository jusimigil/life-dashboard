import { useState } from "react";
import { saveDailyTasks } from "../api/api";

const Tasks = () => {
  const [tasks, setTasks] = useState({
    move: false,
    study: false,
    uncomfortable: false,
    regulate: false,
    finance: false,
    connect: false
  });

  const handleSave = async () => {
    await saveDailyTasks(tasks);
    alert("Tasks saved!");
  };

  return (
    <div className="card">
      <h2>Daily Tasks</h2>
      {Object.keys(tasks).map((t) => (
        <label key={t}>
          <input
            type="checkbox"
            checked={tasks[t]}
            onChange={(e) =>
              setTasks({ ...tasks, [t]: e.target.checked })
            }
          />
          {t.charAt(0).toUpperCase() + t.slice(1)}
        </label>
      ))}
      <button onClick={handleSave}>Save Tasks</button>
    </div>
  );
};

export default Tasks;
