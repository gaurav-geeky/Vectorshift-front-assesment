// // inputNode.js

import BaseNode from "./BaseNode";
import { useState } from "react";

export default function InputNode({ id, data }) {
  const [name, setName] = useState(data?.inputName || "input_1");

  return (
    <BaseNode
    style={{ backgroundColor: "#82cdff" }}
      title="Input"
      outputs={[{ id: `${id}-value`, top: "50%" }]}
    >
      <label>Name:</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </BaseNode>
  );
}


