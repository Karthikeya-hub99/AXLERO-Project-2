import { useState } from "react";
import Editor from "@monaco-editor/react";

const DEFAULT_CODE = `def main():
    print("Hello from WasmBox!")

main()`;

function CodeEditor() {
  const [code, setCode] = useState(DEFAULT_CODE);

  const handleEditorChange = (value) => {
    setCode(value ?? "");
  };

  const handleReset = () => {
    setCode(DEFAULT_CODE);
  };

  return (
    <div className="code-editor-container">
      <div className="code-editor-toolbar">
        <span>Python</span>
        <button onClick={handleReset}>Reset Code</button>
      </div>

      <Editor
        height="350px"
        language="python"
        value={code}
        onChange={handleEditorChange}
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          automaticLayout: true,
          wordWrap: "on",
          lineNumbers: "on",
          scrollBeyondLastLine: false,
          tabSize: 4,
          insertSpaces: true,
          renderLineHighlight: "line",
          padding: { top: 12 },
        }}
      />
    </div>
  );
}

export default CodeEditor;