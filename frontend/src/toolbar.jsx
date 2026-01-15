// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    //  here is my actual nodes are kept
    return (
        <div style={{ padding: '10px', backgroundColor: "lightgray" }}>

            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px', border: "1px solid blue", backgroundColor: "beige" }}>

                <DraggableNode style={{ backgroundColor: "blue", width: "90px", height: "55px" }}
                    type='customInput' label='Input' />

                <DraggableNode
                    type='llm' label='LLM' />

                <DraggableNode
                    type='customOutput' label='Output' />

                <DraggableNode
                    type='text' label='Text' />

                <DraggableNode
                    type='math' label='Math' />

                <DraggableNode
                    type='concat' label='Concat' />

                <DraggableNode
                    type='condition' label='Condition' />

                <DraggableNode
                    type='format' label='Format' />

                <DraggableNode
                    type='log' label='Log' />

            </div>
        </div>
    );
};
