import { useState } from "react";
import "./Dashboard.css";
import CodeEditor from "../components/CodeEditor";
function Dashboard() {
  const [output, setOutput] = useState("");
  const [runStatus, setRunStatus] = useState("Ready");
  const [isRunning, setIsRunning] = useState(false);
  const [runHistory, setRunHistory] = useState([]);
  const [executionTime, setExecutionTime] = useState(null);
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>WasmBox</h1>
        <span>Developer Portal</span>
      </header>

      <div className="dashboard-body">
        <aside className="sidebar">
          <h2>Plugins</h2>

          <button>+ New Plugin</button>

          <div className="plugin-list">
  <div className="plugin-item active">
    <strong>Hello Plugin</strong>
    <span>Python</span>
  </div>

  <div className="plugin-item">
    <strong>Data Processor</strong>
    <span>Python</span>
  </div>
</div>
        </aside>

        <main className="main-content">
          <section className="editor-section">
  <div className="editor-header">
    <div>
      <h2>Plugin Editor</h2>
      <span className="file-name">main.py</span>
    
      <span className="run-status"> 
        Status: {runStatus}
      </span>
    </div>

<button
  className="run-button"
  disabled={isRunning}
onClick={() => {
  const startTime = Date.now();

  setIsRunning(true);
  setRunStatus("Running");
  setOutput("Plugin is running...");

  const startedAt = new Date().toLocaleTimeString();

  setTimeout(() => {
    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    const result = "Plugin execution completed successfully.";

    setOutput(result);
    setRunStatus("Completed");
    setIsRunning(false);

    setRunHistory((previousHistory) => [
      {
        id: Date.now(),
        time: startedAt,
        status: "Completed",
        message: result,
        duration: duration,
      },
      ...previousHistory,
    ]);
  }, 1500);
}}
>
  {isRunning ? "Running..." : "Run Plugin"}
</button>
  </div>

  <CodeEditor />
</section>


<section className="output-section">
  <div className="output-header">
    <h3>Execution Output</h3>
    <button
      className="clear-output-button"
      onClick={() => setOutput("")}
    >
      Clear Output
    </button>
  </div>

  <div className="output-placeholder">
    {output || "Run a plugin to see the output here."}
  </div>
</section>

<section className="run-history-section">
  <h3>Run History</h3>

  {runHistory.length === 0 ? (
    <p className="run-history-empty">
      No runs yet. Click Run Plugin to get started.
    </p>
  ) : (
    <div className="run-history-list">
      {runHistory.map((run) => (
        <div className="run-history-item" key={run.id}>
          <div>
            <strong>{run.status}</strong>
            <p>{run.message}</p>
          </div>
          <span>{run.time}</span>
          <span>Duration: {run.duration}s</span>
        </div>
      ))}
    </div>
  )}
</section>

        </main>
      </div>
    </div>
  );
}

export default Dashboard;