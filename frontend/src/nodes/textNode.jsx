// // textNode.js

import BaseNode from "./BaseNode";
import { useState, useRef, useEffect } from "react";

export default function TextNode({ id, data }) {
  const [text, setText] = useState(data?.text || "");
  const textRef = useRef(null);

  // Regex to detect only variables like {{ name }}
  const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
  const variables = [...text.matchAll(regex)].map((match) => match[1]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  // Auto-resize on text change
  useEffect(() => {
    const el = textRef.current;
    if (el) {
      el.style.height = "auto";
      el.style.height = el.scrollHeight + "px";
    }
  }, [text]);

  return (
    <BaseNode
      style={{ backgroundColor: "yellow" }}
      title="Text"
      inputs={variables.map((v, i) => ({
        id: `${id}-${v}`,
        top: `${(i + 1) * 20}%`
      }))}
      outputs={[{ id: `${id}-output`, top: "50%" }]}
    >
      <label style={{ backgroundColor: "lightgreen" }}>Text:</label>
      <textarea
        ref={textRef}
        value={text}
        onChange={handleChange}
        style={{
          width: "100%",
          minHeight: "40px",
          resize: "none",
          overflow: "hidden",
          backgroundColor: "cyan"
        }}
      />

    </BaseNode>
  );
}







