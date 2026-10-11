import { useState } from "react";
import "./Dashboard.css";
import CodeEditor from "../components/CodeEditor";
function Dashboard() {
  const [output, setOutput] = useState("");
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
    </div>

    <button className="run-button">
      ▶ Run Plugin
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

        </main>
      </div>
    </div>
  );
}

export default Dashboard;