import { Handle, Position } from "reactflow";

export default function BaseNode({
    title,
    inputs = [],
    outputs = [],
    children,
    style
}) 
{
    const defaultStyle = {
        margin: '0',
        marginBottom: '10', 
        backgroundColor: "#d4d4d4",
    }


    return (
        <div style={{
            width: 220,
            padding: 10,
            border: "2px solid #333",
            borderRadius: 8,
            background: "#fff"
        }}>
            <h4 style={{ ...defaultStyle, ...style }}>{title}</h4>

            {/* Render target for left side handles */}
            {inputs.map((input, i) => (
                <Handle
                    key={i}
                    type="target"
                    position={Position.Left}
                    id={input.id}
                    style={{ top: input.top }}
                />
            ))}

            {/* Custom content inside the node */}
            <div>{children}</div>

            {/* Render source for right side handles */}
            {outputs.map((output, i) => (
                <Handle
                    key={i}
                    type="source"
                    position={Position.Right}
                    id={output.id}
                    style={{ top: output.top }}
                />
            ))}
        </div>
    );
}

/*

title → changes the node's name

inputs → left-side handles

outputs → right-side handles

children → dynamic UI inside the node (inputs, labels, etc.)

*/