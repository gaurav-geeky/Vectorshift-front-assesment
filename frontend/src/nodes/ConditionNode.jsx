import BaseNode from "./BaseNode";
import { useState } from "react";

export default function ConditionNode({ id, data }) {
  const [operator, setOperator] = useState(data?.operator || ">");

  return (
    <BaseNode
      title="Condition Node"
      inputs={[
        { id: `${id}-left`, top: "30%" },   // Left value
        { id: `${id}-right`, top: "70%" }  // Right value
      ]}
      outputs={[
        { id: `${id}-true`, top: "30%" },
        { id: `${id}-false`, top: "70%" }
      ]}
    >
      <div style={{ display: "flex", gap: "6px" }}>

        <label>Condition:</label>
        <select
          style={{ width: "50px" }}
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
        >
          <option value=">">&gt;</option>
          <option value="<">&lt;</option>
          <option value="=">=</option>
        </select>

      </div>
    </BaseNode>
  );
}

