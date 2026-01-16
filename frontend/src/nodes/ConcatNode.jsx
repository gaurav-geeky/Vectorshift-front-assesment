
import BaseNode from "./BaseNode";
import { useState } from "react";

export default function ConcatNode({ id, data }) {

    const [separator, setSeparator] = useState(data?.separator || "");

    return (
        <BaseNode
        style={{ backgroundColor: "#ffaaf4" }}
            title="Concat Node"
            inputs={[
                { id: `${id}-text1`, top: "30%" },
                { id: `${id}-text2`, top: "60%" },
            ]}
            outputs={[{ id: `${id}-output`, top: "50%" }]}
        >
            <label>Separator:</label>
            <input
                value={separator}
                onChange={(e) => setSeparator(e.target.value)}
            />

        </BaseNode>
    )
}