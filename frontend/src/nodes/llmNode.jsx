import BaseNode from "./BaseNode";

export default function LLMNode({ id }) {
  
  return (
    <BaseNode
    style={{ backgroundColor: "#98ffcd" }}
      title="LLM"
      inputs={[
        { id: `${id}-system`, top: "33%" },
        { id: `${id}-prompt`, top: "66%" }
      ]}
      outputs={[{ id: `${id}-response`, top: "50%" }]}
    >
      <span>This is a LLM node</span>
    </BaseNode>
  );
}
