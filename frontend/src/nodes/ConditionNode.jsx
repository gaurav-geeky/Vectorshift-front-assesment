import BaseNode from "./BaseNode";
import { useState } from "react";

export default function ConditionNode({ id, data }) {
  const [condition, setCondition] = useState(data?.condition || ">");

  return (
    <BaseNode
      title="Condition Node"
      inputs={[
        { id: `${id}-value`, top: "40%" }
      ]}
      outputs={[
        { id: `${id}-true`, top: "30%" },
        { id: `${id}-false`, top: "60%" }
      ]}
    >
      <label>Condition:</label>
      <select
        value={condition}
        onChange={(e) => setCondition(e.target.value)}
      >
        <option value=">">&gt;</option>
        <option value="<">&lt;</option>
        <option value="=">=</option>
      </select>
    </BaseNode>
  );
}
