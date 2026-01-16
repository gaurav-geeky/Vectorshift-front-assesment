// output node js 

import BaseNode from "./BaseNode";
import { useState } from "react";

export default function OutputNode({ id, data }) {
  const [name, setName] = useState(data?.outputName || "output_1");

  return (
    <BaseNode
    style={{ backgroundColor: "#dba1ff" }}
      title="Output"
      inputs={[{ id: `${id}-value`, top: "50%" }]}
    >
      <label>Name:</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </BaseNode>
  );
}
