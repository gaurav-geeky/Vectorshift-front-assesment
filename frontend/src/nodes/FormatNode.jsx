import BaseNode from "./BaseNode";
import { useState } from "react";

export default function FormatNode({ id, data }) {

    const [format, setFormat] = useState(data?.format || "upper");

    return (
        <BaseNode
            title="Format Node"
            inputs={[{ id: `${id}-text`, top: "50%" }]}
            outputs={[{ id: `${id}-formatted`, top: "50%" }]}
        >
            <label> Format:</label>
            <select
                value={format}
                onChange={(e) => setFormat(e.target.value)}
            >
                <option value="upper">UPPERCASE</option>
                <option value="lower">LOWERCASE</option>
            </select>

        </BaseNode>
    )
}

