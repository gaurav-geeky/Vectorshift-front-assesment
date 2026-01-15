
import BaseNode from "./BaseNode";
import { useState } from "react";

export default function MathNode({ id, data }) {

    const [operation, setOperation] = useState(data?.operation || "+");

    return (
        <BaseNode
            title="Math Node"
            inputs={[
                { id: `${id}-a`, top: "30%" },
                { id: `${id}-b`, top: "60%" },
            ]}
            outputs={[{ id: `${id}-result`, top: "50%" }]}
        >
            
            <label>Operation:</label>
            <select
                value={operation}
                onChange={(e) => setOperation(e.target.value)}
            >
                <option value="+">Add</option>
                <option value="-">Substract</option>
                <option value="*">Multiply</option>
                <option value="/">Divide</option>
            </select>

        </BaseNode>
    );

}