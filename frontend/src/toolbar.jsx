// toolbar.js

import { useState } from 'react';
import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    //  here is my actual nodes are kept top nav bar 
    return (
        <div style={{ padding: '10px', backgroundColor: "lightgray" }}>

            <div style={{ marginTop: '20px', padding: "10px 2px", display: 'flex', flexWrap: 'wrap', gap: '10px', backgroundColor: "#f7f7f7", boxShadow: "0 2px 4px rgba(0,0,0,0.15)" }}>

                <DraggableNode
                    style={{ backgroundColor: "blue" }}
                    type='customInput' label='Input' className="node" />

                <DraggableNode
                    style={{ background: "linear-gradient(135deg, #064E3B, #10B981)" }}

                    type='llm' label='LLM' className="node" />

                <DraggableNode
                    style={{ backgroundColor: "blueviolet" }}
                    type='customOutput' label='Output' className="node" />

                <DraggableNode
                    style={{ background: "linear-gradient(135deg, #1E3A8A, #3B82F6)" }}
                    type='text' label='Text' className="node" />

                <DraggableNode
                    style={{ backgroundColor: "sandybrown" }}
                    type='math' label='Math' className="node" />

                <DraggableNode
                    style={{ background: "linear-gradient(135deg, #c23947, #e01d95 )" }}
                    type='concat' label='Concat' className="node" />

                <DraggableNode
                    style={{ backgroundColor: "#1E3A8A" }}
                    type='condition' label='Condition' className="node" />

                <DraggableNode
                    style={{ backgroundColor: "#3B0764" }}
                    type='format' label='Format' className="node" />

                <DraggableNode
                    style={{ background: "linear-gradient(135deg, #ca38c3, #14349d)" }}
                    type='log' label='Log' className="node" />

            </div>
        </div>
    );
};


// background: linear-gradient(90deg, #fff9fc, #f3e6f9);
//  #f7f7f7
