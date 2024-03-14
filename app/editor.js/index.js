"use client";

import { useState } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/mode-javascript";

const CodeEditor = (props) => {
  const { addCodeData } = props;

  const [code, setCode] = useState("");

  const handleChange = (e) => {
    setCode(e);
  };

  const addCode = () => {
    addCodeData(code);
  };

  return (
    <div className="editor-div flex flex-col gap-4">
      <AceEditor
        mode="javascript"
        theme="monokai"
        value={code}
        onChange={handleChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        fontSize={14}
        width="100%"
        height="200px"
        showGutter={false}
        setOptions={{
          tabSize: 2,
          useSoftTabs: true,
          navigateWithinSoftTabs: true,
          wrapBehavioursEnabled: true,
          indentedSoftWrap: true,
        }}
      />
      <button
        type="button"
        onClick={addCode}
        className="self-end border p-2 rounded-md"
      >
        Add code
      </button>
    </div>
  );
};

export default CodeEditor;
