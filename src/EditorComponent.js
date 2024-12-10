import React, { useState } from "react";
import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw,
  convertFromRaw,
} from "draft-js";
import "draft-js/dist/Draft.css";

// Define custom styles for Draft.js
const customStyleMap = {
  RED: {
    color: "red",
  },
};

const EditorComponent = () => {
  // State for Draft.js editor
  const [editorState, setEditorState] = useState(() => {
    // Retrieve saved content from localStorage, if available
    const savedData = localStorage.getItem("editorContent");
    return savedData
      ? EditorState.createWithContent(convertFromRaw(JSON.parse(savedData)))
      : EditorState.createEmpty();
  });

  // Function to handle the Save button click
  const saveContent = () => {
    const contentState = editorState.getCurrentContent();
    const rawContent = convertToRaw(contentState);
    localStorage.setItem("editorContent", JSON.stringify(rawContent));
    alert("Content saved!");
  };

  // Custom key formatting for heading, bold, red, and underline
  const handleBeforeInput = (chars) => {
    const currentContent = editorState.getCurrentContent();
    const blockText = currentContent.getBlockMap().first().getText();

    if (chars === " " && blockText === "#") {
      setEditorState(RichUtils.toggleBlockType(editorState, "header-one"));
      return "handled";
    }
    if (chars === " " && blockText === "*") {
      setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
      return "handled";
    }
    if (chars === " " && blockText === "**") {
      setEditorState(RichUtils.toggleInlineStyle(editorState, "RED"));
      return "handled";
    }
    if (chars === " " && blockText === "***") {
      setEditorState(RichUtils.toggleInlineStyle(editorState, "UNDERLINE"));
      return "handled";
    }

    return "not-handled";
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Title */}
      <h1>Demo Editor by &lt;Sufiyan Khalil Ahmed Surve&gt;</h1>

      {/* Save Button */}
      <button
        onClick={saveContent}
        style={{
          marginBottom: "10px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "#007BFF",
          color: "#FFF",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Save
      </button>

      {/* Draft.js Editor */}
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          minHeight: "300px",
          borderRadius: "5px",
        }}
      >
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          handleBeforeInput={handleBeforeInput}
          customStyleMap={customStyleMap} // Pass the custom style map
        />
      </div>
    </div>
  );
};

export default EditorComponent;
