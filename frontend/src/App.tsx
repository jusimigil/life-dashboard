import Tasks from "./components/Tasks";
import Finance from "./components/Finance";
import ProgressBars from "./components/ProgressBars";
import Badges from "./components/Badges";
import './index.css';

function App() {
  return (
    <div className="App">
      <h1>Life Dashboard</h1>
      <Tasks />
      <Finance />
      <ProgressBars />
      <Badges />
    </div>
  );
}

export default App;
