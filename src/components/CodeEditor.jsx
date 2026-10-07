import { useState } from "react";
import Editor from "@monaco-editor/react";

function CodeEditor() {
  const [code, setCode] = useState(`def main():
    print("Hello from WasmBox!")

main()`);

  const handleEditorChange = (value) => {
    setCode(value || "");
  };

  return (
    <Editor
      height="350px"
      defaultLanguage="python"
      value={code}
      theme="vs-dark"
      onChange={handleEditorChange}
      options={{
        minimap: {
          enabled: false,
        },
        fontSize: 14,
        automaticLayout: true,
        wordWrap: "on",
        lineNumbers: "on",
        scrollBeyondLastLine: false,
      }}
    />
  );
}

export default CodeEditor;