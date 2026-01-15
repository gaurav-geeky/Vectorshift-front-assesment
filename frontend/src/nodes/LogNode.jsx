import BaseNode from "./BaseNode";

export default function LogNode({ id, data }) {
  return (
    <BaseNode
      title="Log Node"
      inputs={[{ id: `${id}-input`, top: "50%" }]}
    >
      <div style={{ padding: 5, background: "#eee", borderRadius: 4 }}>
        <strong>Value:</strong> {data.value || "waiting..."}
      </div>
    </BaseNode>
  );
}
