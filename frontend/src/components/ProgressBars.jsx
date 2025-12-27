import { useEffect, useState } from "react";
import { fetchProgress } from "../api/api";

const ProgressBars = () => {
  const [progress, setProgress] = useState({});

  useEffect(() => {
    const loadProgress = async () => {
      const data = await fetchProgress();
      setProgress(data);
    };
    loadProgress();
  }, []);

  return (
    <div className="card">
      <h2>Weekly Progress</h2>
      {Object.keys(progress).map((goal) => (
        <div key={goal} className="progress-container">
          <span>{goal.charAt(0).toUpperCase() + goal.slice(1)}</span>
          <div className="bar-bg">
            <div
              className="bar-fill"
              style={{ width: `${progress[goal]}%` }}
            ></div>
          </div>
          <span>{progress[goal]}%</span>
        </div>
      ))}
    </div>
  );
};

export default ProgressBars;
